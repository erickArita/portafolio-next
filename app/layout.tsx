import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "@erickArita · pixel profile",
  description:
    "Erick Arita — full-stack software engineer from Honduras. A retro pixel-art profile with live GitHub metrics. .NET + React + Python.",
  metadataBase: new URL("https://erick-arita.vercel.app"),
  openGraph: {
    title: "@erickArita · pixel profile",
    description:
      "Full-stack software engineer · .NET + React + Python · live GitHub metrics.",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${pressStart.variable} ${vt323.variable}`}>
      <body>{children}</body>
    </html>
  );
}
