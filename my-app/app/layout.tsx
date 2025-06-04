import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tangram Tools",
  description: "Transform your ideas into reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
