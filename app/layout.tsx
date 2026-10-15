import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://mulail-portfolio.mulail-lallu2011.chatgpt.site",
  ),
  title: "Mulail — Ideas into intelligent technology",
  description:
    "The portfolio of Mulail: student developer, robotics innovator, and ThinkORB team member. Explore robotics, embedded systems, IoT, and web projects.",
  openGraph: {
    title: "Mulail — Building ideas into intelligent technology",
    description: "Robotics. Code. Curiosity. A student innovator’s journey.",
    images: [{ url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/mulail-portrait.webp` }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mulail — Robotics, code & curiosity",
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/mulail-portrait.webp`],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
