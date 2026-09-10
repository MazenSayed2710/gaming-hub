import Link from "next/link";
import SearchBar from "./games/SearchBar";
import { ThemeToggle } from "./home/ThemeToggle";
import { AuthNav } from "./shared/AuthNav";
import PrimaryNavigation from "./shared/PrimaryNavigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="shrink-0">
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

        {/* Navigation */}
        <div className="hidden lg:block">
          <PrimaryNavigation />
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2">
          <SearchBar className="hidden w-64 xl:block" />

          <ThemeToggle />

          <div className="hidden h-7 w-px bg-slate-200 dark:bg-slate-800 sm:block" />

          <AuthNav />
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="border-t border-slate-200/60 px-4 py-2 lg:hidden dark:border-slate-800/60">
        <div className="flex items-center gap-2 overflow-x-auto">
          <PrimaryNavigation />

          <div className="ml-auto shrink-0 sm:hidden">
            <SearchBar className="w-48" />
          </div>
        </div>
      </div>
    </header>
  );
}
