import type { Metadata } from "next";
import { dmSans } from "@/lib/fonts";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";

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
        className={`${dmSans.className} ${dmSans.variable} font-sans antialiased`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
