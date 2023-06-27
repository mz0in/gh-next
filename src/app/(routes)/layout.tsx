import "./globals.css";

// components
import { TailwindIndicator } from "~/app/(components)/tailwind-indicator";

// utils
import { Inter } from "next/font/google";

// types
import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV !== "production" && <TailwindIndicator />}
      </body>
    </html>
  );
}