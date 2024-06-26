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
  title: "Mosbahi Firas",
  description: "Mosbahi Firas Portfolio",
};

console.log(montserrat);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <div className="bg-[#F3F4F6] py-12 px-12 lg:px-16 xl:max-w-full min-h-screen h-fit lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-md max-w-screen-sm overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
