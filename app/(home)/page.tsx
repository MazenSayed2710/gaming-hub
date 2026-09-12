import { Suspense } from "react";
import { Hero } from "@/components/home/Hero";
import { HomeSections } from "@/components/home/HomeSections";
import { HomeSectionsSkeleton } from "@/components/home/Skeleton/HomeSectionsSkeleton";
import { getHomeSections, getTrendingGames } from "@/lib/rawg";

export default async function HomePage() {
  const sections = getHomeSections();
  const trendingGames = await getTrendingGames();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 relative z-10">
        <Hero games={trendingGames} />
        <Suspense fallback={<HomeSectionsSkeleton />}>
          <HomeSections trendingGames={trendingGames} data={sections} />
        </Suspense>
      </main>
    </div>
  );
}
