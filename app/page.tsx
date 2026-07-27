import { Hero } from "@/components/home/Hero";
import { GameSection } from "@/components/home/GameSection";
import { GenreSection } from "@/components/home/GenreSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import Header from "@/components/Header";
import {
  getNewReleases,
  getFeaturedGames,
  getGenres,
  getPlatforms,
  getTopRatedGames,
  getTrendingGames,
} from "@/lib/rawg";

export default async function HomePage() {
  const [
    featuredGames,
    trendingGames,
    topRatedGames,
    newReleases,
    genres,
    platforms,
  ] = await Promise.all([
    getFeaturedGames(),
    getTrendingGames(),
    getTopRatedGames(),
    getNewReleases(),
    getGenres(),
    getPlatforms(),
  ]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <Header />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <Hero games={featuredGames} />

        <div id="trending" className="space-y-8">
          <GameSection
            title="Trending games"
            subtitle="The most added titles this week"
            games={trendingGames}
            viewAllLink="/games"
          />

          <GameSection
            title="Top rated games"
            subtitle="Critically acclaimed experiences"
            games={topRatedGames}
            viewAllLink="/games"
          />

          <GameSection
            title="New releases"
            subtitle="Fresh arrivals from the latest launches"
            games={newReleases}
            viewAllLink="/games"
          />
        </div>

        <GenreSection genres={genres} />
        <PlatformSection platforms={platforms} />
      </main>
    </div>
  );
}
