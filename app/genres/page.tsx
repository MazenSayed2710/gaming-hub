import CatalogHeader from "@/components/shared/CatalogHeader";
import { DiscoveryCard } from "@/components/shared/DiscoveryCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { getGenres } from "@/lib/rawg";

export default async function GenresPage() {
  const genres = await getGenres();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <CatalogHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Explore by genre"
          title="Browse the genres shaping today’s games"
          description="Discover your favorite playstyles, from action and adventure to strategy and simulation."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {genres.map((genre) => (
            <DiscoveryCard
              key={genre.id}
              item={genre}
              href={`/genres/${genre.slug}`}
              description={`Explore ${genre.name.toLowerCase()} titles and discover fresh picks.`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
