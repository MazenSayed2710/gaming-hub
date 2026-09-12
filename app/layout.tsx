import type { Metadata } from "next";
import "./globals.css";
import { createNextServerHelpers } from "@appwrite.io/react/server/next";
import { Providers } from "./providers";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Gaming Hub",
  description:
    "A polished RAWG-powered gaming homepage with featured games, genres, and platforms.",
};

const appwrite = {
  endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const helpers = createNextServerHelpers(appwrite);
  const session = await helpers.readSessionCookie();
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              let theme;
              try { theme = localStorage.getItem("theme"); } catch {}
              if (theme !== "light" && theme !== "dark") {
                theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
              }
              document.documentElement.classList.toggle("dark", theme === "dark");
              try { localStorage.setItem("theme", theme); } catch {}
            })();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <Providers session={session}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
