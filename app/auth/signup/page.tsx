import { SignupForm } from "@/components/auth/SignupForm";

export const metadata = {
  title: "Sign Up - Gaming Hub",
  description: "Create a Gaming Hub account",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <main className="mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
              Join the community
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Create your account
            </h1>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              Sign up to save your favorite games and track your gaming
              collection
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
            <SignupForm />
          </div>
        </div>
      </main>
    </div>
  );
}
