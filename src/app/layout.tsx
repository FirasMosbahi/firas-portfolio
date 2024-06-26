import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import useCustomNavigation from "@portfolio/hooks/useCustomNavigation";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Firas Mosbahi",
  description: "Firas Mosbahi Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="min-h-screen bg-[#F3F4F6] py-12 px-12 lg:px-16">
          {children}
        </div>
      </body>
    </html>
  );
}
