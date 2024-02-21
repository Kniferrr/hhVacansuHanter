import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HH Stats schedule",
  description: "Create by knifer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
