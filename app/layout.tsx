import type { Metadata } from "next";
import "./globals.css";
import { kodeMonoFont } from './fonts/fonts';

export const metadata: Metadata = {
  title: "Give me a password !",
  description: "Generate a password from an url for your favorite websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kodeMonoFont.className}>{children}</body>
    </html>
  );
}
