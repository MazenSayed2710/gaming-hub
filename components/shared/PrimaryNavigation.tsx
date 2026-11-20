"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useId, useRef, useState } from "react";
import { Gamepad2, Grid2X2, Home, Menu, Monitor, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements =
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto sm:gap-2 sm:px-3"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        <span className="sr-only sm:not-sr-only">Menu</span>
      </button>

      {isOpen
        ? createPortal(
            <div className="fixed inset-0 z-[60]">
              <button
                type="button"
                tabIndex={-1}
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
              />

              <aside
                ref={panelRef}
                id={menuId}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`${menuId}-title`}
                className="absolute inset-y-0 left-0 flex w-80 max-w-[85vw] flex-col border-r border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
                  <div>
                    <h2
                      id={`${menuId}-title`}
                      className="text-base font-bold text-slate-950 dark:text-slate-100"
                    >
                      Gaming
                      <span className="text-indigo-600 dark:text-indigo-400">
                        Hub
                      </span>
                    </h2>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Discover. Play. Enjoy.
                    </p>
                  </div>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav
                  className="mt-5 flex flex-col gap-1"
                  aria-label="Primary navigation"
                >
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href ||
                          pathname.startsWith(`${item.href}/`);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
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
              </aside>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
