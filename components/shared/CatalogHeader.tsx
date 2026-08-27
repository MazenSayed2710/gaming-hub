import { ThemeToggle } from "@/components/home/ThemeToggle";
import SearchBar from "@/components/games/SearchBar";
import PrimaryNavigation from "@/components/shared/PrimaryNavigation";

export default function CatalogHeader() {
  return (
    <header className="border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/70 relative z-30">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            Browse games
          </p>
          <h1 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
            Discover your next favorite title
          </h1>
        </div>

        <PrimaryNavigation />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <SearchBar className="w-full sm:w-72" />
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
