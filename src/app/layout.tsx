import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import { DashboardShell } from "@/_components/DashboardShell";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nexus - Analytics Dashboard",
  description:
    "A fully customizable, futuristic SaaS analytics dashboard template. Built using NeonBlade UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${orbitron.variable}`}>
      <body className="selection:bg-[#00f3ff] selection:text-black">
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
