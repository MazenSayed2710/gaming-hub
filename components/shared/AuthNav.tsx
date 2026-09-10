"use client";

import { useAuth } from "@appwrite.io/react";
import { LogOut, User, UserPlus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function AuthNav() {
  const { user, isLoading, signOut } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="h-9 w-20 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-1">
        <Link
          href="/profile"
          className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <User className="h-4 w-4" />

          <span className="hidden xl:block">
            {user.name || user.email?.split("@")[0] || "Profile"}
          </span>
        </Link>

        <button
          type="button"
          onClick={() =>
            signOut.signOut({
              onSuccess: () => {
                router.push("/");
                router.refresh();
              },
            })
          }
          className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-red-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-red-400"
        >
          <LogOut className="h-4 w-4" />

          <span className="hidden xl:block">Sign out</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <Link
        href="/auth/login"
        className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        <User className="h-4 w-4" />
        <span className="hidden sm:block">Sign in</span>
      </Link>

      <Link
        href="/auth/signup"
        className="flex items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 hover:shadow-md dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        <UserPlus className="h-4 w-4" />
        <span className="hidden sm:block">Sign up</span>
      </Link>
    </div>
  );
}
