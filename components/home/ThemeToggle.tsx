"use client";

export function ThemeToggle() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      window.localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:scale-[1.02] hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
    >
      <span className="hidden dark:inline">☀️ Light</span>
      <span className="dark:hidden">🌙 Dark</span>
    </button>
  );
}
