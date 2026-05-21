import PixelProfile from "@/components/pixel/PixelProfile";
import { getStatsSafe } from "@/lib/github";

// Re-fetch GitHub data at most once per hour (ISR). Falls back to sample data
// when GH_TOKEN is not set, so the page always renders.
export const revalidate = 3600;

const USERNAME = process.env.GH_USERNAME || "erickArita";

export default async function Home() {
  const stats = await getStatsSafe(USERNAME);
  return <PixelProfile stats={stats} />;
}
