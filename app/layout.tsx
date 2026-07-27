import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaming Hub",
  description:
    "A polished RAWG-powered gaming homepage with featured games, genres, and platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
