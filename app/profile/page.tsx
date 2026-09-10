"use client";

import { useAuth } from "@appwrite.io/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { LogOut, Mail, User } from "lucide-react";
import ProfileLoading from "./loading";
export default function ProfilePage() {
  const { user, isLoading, signOut } = useAuth();
  const router = useRouter();

  if (!isLoading && !user) {
    redirect("/auth/login");
  }

  if (isLoading) {
    return <ProfileLoading />;
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Profile Card */}
          <div className="md:col-span-2">
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-500/10">
                  <User className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    {user.name || "User"}
                  </h1>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Your Gaming Hub profile
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <div className="mt-2 rounded-lg bg-slate-50 px-4 py-3 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
                    {user.name || "Not set"}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </label>
                  <div className="mt-2 rounded-lg bg-slate-50 px-4 py-3 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
                    {user.email}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Account Created
                  </label>
                  <div className="mt-2 rounded-lg bg-slate-50 px-4 py-3 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
                    {new Date(user.$createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Card */}
          <div>
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
              <h2 className="mb-6 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Actions
              </h2>

              <div className="space-y-3">
                <button
                  onClick={() =>
                    signOut.signOut({
                      onSuccess: () => {
                        router.push("/");
                        router.refresh();
                      },
                    })
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-500 dark:bg-red-500/20 dark:text-red-400 dark:hover:bg-red-500/30"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
