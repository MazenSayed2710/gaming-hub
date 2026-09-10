import { redirect } from "next/navigation";
import { GameCard } from "@/components/home/GameCard";
import { GamesPagination } from "@/components/games/GamesPagination";
import { getUserCollection } from "@/lib/user-games";

interface FavoritesPageProps {
  searchParams?: Promise<Record<string, string | undefined>>;
}

export default async function FavoritesPage({
  searchParams,
}: FavoritesPageProps) {
  const collection = await getUserCollection("favorites");
  if (!collection) {
    redirect("/auth/login");
  }

  const params = (await searchParams) ?? {};
  const page = Math.max(1, Number(params.page ?? "1"));
  const pageSize = 12;
  const totalPages = Math.max(1, Math.ceil(collection.games.length / pageSize));
  const games = collection.games.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-400">
          Saved games
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Your favorites
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Revisit the games you never want to lose track of.
        </p>
      </section>

      {games.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400">
          You have no favorite games yet. Mark a game as a favorite to see it
          here.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}

      {games.length > 0 ? (
        <GamesPagination
          currentPage={page}
          totalPages={totalPages}
          searchParams={params}
          basePath="/favorites"
        />
      ) : null}
    </main>
  );
}
