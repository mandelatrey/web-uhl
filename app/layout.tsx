import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DMSans = DM_Sans({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-dm-sans',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Uhlendorf Innovations",
  description: "We Create Sustainable Solutions for Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${DMSans.className} ${DMSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
