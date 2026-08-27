import CatalogHeader from "@/components/shared/CatalogHeader";
import { DiscoveryCard } from "@/components/shared/DiscoveryCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { getPlatforms } from "@/lib/rawg";

export default async function PlatformsPage() {
  const platforms = await getPlatforms();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <CatalogHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Explore by platform"
          title="Find games for the way you play"
          description="Browse consoles, computers, and handhelds to discover your next favorite game."
        />

        {platforms.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400">
            No platforms are available right now.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {platforms.map((platform) => (
              <DiscoveryCard
                key={platform.id}
                item={platform}
                href={`/platforms/${platform.id}`}
                description={`Play ${platform.name} favorites and discover new releases.`}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
