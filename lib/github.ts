// lib/github.ts
// Cached fetch of GitHub stats via the GraphQL API. Cached 1h on the server.
// Used by the /api/og/* SVG routes AND the portfolio page — single source of truth.

export type Lang = { name: string; pct: number; color: string };

export type Stats = {
  commits: number;
  prs: number;
  reviews: number;
  issues: number;
  repos: number;
  stars: number;
  forks: number;
  followers: number;
  streak: number;
  topLangs: Lang[];
  /** 52 weeks × 7 days of contribution counts (column-major: weeks[w][d]). */
  weeks: number[][];
  /** true when these are real numbers from the GitHub API, false when fallback. */
  live: boolean;
};

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      followers { totalCount }
      repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
        totalCount
        nodes {
          stargazerCount
          forkCount
          languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
            edges { size node { name color } }
          }
        }
      }
      contributionsCollection {
        totalCommitContributions
        totalPullRequestContributions
        totalIssueContributions
        totalPullRequestReviewContributions
        contributionCalendar {
          weeks {
            contributionDays { contributionCount date }
          }
        }
      }
    }
  }
`;

/** Sample data shown when GH_TOKEN is missing or the API call fails. */
export const FALLBACK_STATS: Stats = {
  commits: 1200,
  prs: 87,
  reviews: 64,
  issues: 41,
  repos: 34,
  stars: 58,
  forks: 23,
  followers: 120,
  streak: 42,
  topLangs: [
    { name: 'C# / .NET', pct: 38, color: '#9b6dff' },
    { name: 'TypeScript', pct: 28, color: '#4ff0d6' },
    { name: 'JavaScript', pct: 14, color: '#ffd23f' },
    { name: 'SQL', pct: 10, color: '#ff5fa2' },
    { name: 'Python', pct: 6, color: '#7aff66' },
    { name: 'HTML / CSS', pct: 4, color: '#ff8a3d' },
  ],
  weeks: buildDeterministicWeeks(),
  live: false,
};

export async function getStats(username: string): Promise<Stats> {
  const token = process.env.GH_TOKEN;
  if (!token) throw new Error('Missing GH_TOKEN env var');

  const r = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'pixel-portfolio',
    },
    body: JSON.stringify({ query: QUERY, variables: { login: username } }),
    // Next.js Data Cache: revalidate every hour
    next: { revalidate: 3600 },
  });

  if (!r.ok) throw new Error(`GitHub API ${r.status}`);
  const { data, errors } = await r.json();
  if (errors) throw new Error(JSON.stringify(errors));

  const u = data.user;
  const stars = u.repositories.nodes.reduce((s: number, x: any) => s + x.stargazerCount, 0);
  const forks = u.repositories.nodes.reduce((s: number, x: any) => s + x.forkCount, 0);

  // Aggregate languages by bytes
  const langTotals = new Map<string, { size: number; color: string }>();
  for (const repo of u.repositories.nodes) {
    for (const e of repo.languages.edges) {
      const cur = langTotals.get(e.node.name) || { size: 0, color: e.node.color || '#888888' };
      cur.size += e.size;
      langTotals.set(e.node.name, cur);
    }
  }
  const sumSize = [...langTotals.values()].reduce((s, l) => s + l.size, 0) || 1;
  const topLangs: Lang[] = [...langTotals.entries()]
    .map(([name, v]) => ({ name, pct: (v.size / sumSize) * 100, color: v.color }))
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 6);

  // Contribution calendar: weeks of daily counts
  const weeks: number[][] = u.contributionsCollection.contributionCalendar.weeks.map(
    (w: any) => w.contributionDays.map((d: any) => d.contributionCount as number),
  );

  // Streak: consecutive days with contributions ending today/yesterday
  const days = u.contributionsCollection.contributionCalendar.weeks
    .flatMap((w: any) => w.contributionDays)
    .sort((a: any, b: any) => a.date.localeCompare(b.date));
  let streak = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].contributionCount > 0) streak++;
    else if (i === days.length - 1) continue;
    else break;
  }

  return {
    commits: u.contributionsCollection.totalCommitContributions,
    prs: u.contributionsCollection.totalPullRequestContributions,
    reviews: u.contributionsCollection.totalPullRequestReviewContributions,
    issues: u.contributionsCollection.totalIssueContributions,
    repos: u.repositories.totalCount,
    stars,
    forks,
    followers: u.followers.totalCount,
    streak,
    topLangs,
    weeks,
    live: true,
  };
}

/** Never throws — returns FALLBACK_STATS on any error so SVGs/pages never 500. */
export async function getStatsSafe(username: string): Promise<Stats> {
  try {
    return await getStats(username);
  } catch {
    return FALLBACK_STATS;
  }
}

/** Deterministic 52×7 grid (seed 1337) so the heatmap looks real but stable offline. */
function buildDeterministicWeeks(): number[][] {
  let seed = 1337;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const weeks: number[][] = [];
  for (let w = 0; w < 52; w++) {
    const days: number[] = [];
    for (let d = 0; d < 7; d++) {
      const r = rnd();
      let count = 0;
      if (r > 0.4) count = 2;
      if (r > 0.65) count = 5;
      if (r > 0.82) count = 9;
      if (r > 0.93) count = 14;
      if (w > 44 && r > 0.55) count += 4;
      days.push(count);
    }
    weeks.push(days);
  }
  return weeks;
}
