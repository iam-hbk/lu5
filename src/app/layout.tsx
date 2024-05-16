import type { Metadata } from "next";
import { Urbanist as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Menu from "@/components/navigation";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Information Systems Architecture",
  description: "Network Architecture & Security Architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          fontSans.variable
        )}
      >
        <nav className="fixed z-10 top-2 right-2">
          <Menu />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
