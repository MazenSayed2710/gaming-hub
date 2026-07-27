import { GameCard } from "@/components/home/GameCard";
import type { RawgGame } from "@/lib/rawg";

interface Props {
  games: RawgGame[];
}

export default function SimilarGamesSection({ games }: Props) {
  if (!games || games.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Similar games</h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </section>
  );
}
