import { ThemeToggle } from "./home/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            Gaming Hub
          </p>
          <h1 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
            Discover Your Next Favorite Game
          </h1>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
