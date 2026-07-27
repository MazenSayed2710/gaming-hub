import type { RawgGame } from "@/lib/rawg";
import { GameCard } from "./GameCard";
import { SectionTitle } from "./SectionTitle";
import { HorizontalScroller } from "./HorizontalScroller";
interface GameSectionProps {
  title: string;
  games: RawgGame[];
  viewAllLink?: string;
  subtitle?: string;
}

export function GameSection({
  title,
  games,
  viewAllLink,
  subtitle,
}: GameSectionProps) {
  return (
    <section className="space-y-4">
      <SectionTitle
        title={title}
        subtitle={subtitle}
        viewAllLink={viewAllLink}
      />

      <HorizontalScroller>
        {games.map((game) => (
          <div
            key={game.id}
            className="min-w-65 max-w-65 shrink-0 snap-start md:min-w-70 md:max-w-70"
          >
            <GameCard game={game} />
          </div>
        ))}
      </HorizontalScroller>
    </section>
  );
}
