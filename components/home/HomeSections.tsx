import type { getHomeSections, RawgGame } from "@/lib/rawg";
import { GameSection } from "./GameSection";
import { GenreSection } from "./GenreSection";
import { PlatformSection } from "./PlatformSection";

interface HomeSectionsProps {
  trendingGames: RawgGame[];
  data: ReturnType<typeof getHomeSections>;
}

export async function HomeSections({ trendingGames, data }: HomeSectionsProps) {
  const { topRatedGames, newReleases, genres, platforms } = await data;

  return (
    <>
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
    </>
  );
}
