"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Grid2X2, Home, Monitor } from "lucide-react";

const navigationItems = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/games",
    label: "Games",
    icon: Gamepad2,
  },
  {
    href: "/genres",
    label: "Genres",
    icon: Grid2X2,
  },
  {
    href: "/platforms",
    label: "Platforms",
    icon: Monitor,
  },
  {
    href: "/favorites",
    label: "Favorites",
  },
  {
    href: "/wishlist",
    label: "Wishlist",
  },
];

export default function PrimaryNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1" aria-label="Primary navigation">
      {navigationItems.map((item) => {
        const Icon = item.icon;

        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            }`}
          >
            {Icon ? <Icon className="h-4 w-4" /> : null}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
