import SearchBar from "./games/SearchBar";
import { ThemeToggle } from "./home/ThemeToggle";
import PrimaryNavigation from "./shared/PrimaryNavigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            Gaming Hub
          </p>
          <h1 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
            Discover Your Next Favorite Game
          </h1>
        </div>
        <div className="order-3 flex w-full lg:order-2 lg:w-auto">
          <PrimaryNavigation />
        </div>

        <div className="order-2 flex items-center gap-2 lg:order-3">
          <SearchBar className="w-full sm:w-72" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
