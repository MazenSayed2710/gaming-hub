import Link from "next/link";
import SearchBar from "./games/SearchBar";
import { ThemeToggle } from "./home/ThemeToggle";
import { AuthNav } from "./shared/AuthNav";
import PrimaryNavigation from "./shared/PrimaryNavigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-x-2 gap-y-3 px-4 py-3 sm:gap-x-4 sm:px-6 lg:px-8 xl:flex xl:gap-4">
        <div className="col-start-1 row-start-1 shrink-0">
          <Link href="/" className="group block">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-lg shadow-sm transition group-hover:scale-105 dark:bg-indigo-500">
                🎮
              </div>

              <div className="hidden sm:block">
                <p className="text-base font-bold tracking-tight text-slate-950 dark:text-slate-100">
                  Gaming
                  <span className="text-indigo-600 dark:text-indigo-400">
                    Hub
                  </span>
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Discover. Play. Enjoy.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-start-2 row-start-1 justify-self-center">
          <PrimaryNavigation />
        </div>

        <div className="col-span-3 row-start-2 min-w-0 border-t border-slate-200/60 pt-3 dark:border-slate-800/60 xl:col-span-1 xl:row-auto xl:border-0 xl:pt-0">
          <SearchBar className="w-full xl:w-64" />
        </div>

        <div className="col-start-3 row-start-1 ml-auto flex items-center gap-2">
          <ThemeToggle />

          <div className="hidden h-7 w-px bg-slate-200 dark:bg-slate-800 sm:block" />

          <AuthNav />
        </div>
      </div>
    </header>
  );
}
