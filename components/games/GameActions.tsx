"use client";

import { Heart, ListPlus } from "lucide-react";
import { useState } from "react";
import { useUser } from "@appwrite.io/react";
import { useRouter } from "next/navigation";

import { useSavedGames } from "@/hooks/useSavedGames";
import type { UserGameCollection } from "@/lib/user-games";

interface GameActionsProps {
  gameId: number;
}

export function GameActions({ gameId }: GameActionsProps) {
  const { user, isLoading: authLoading } = useUser();
  const router = useRouter();

  const { state, error, toggleCollection } = useSavedGames(user?.$id);
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState<UserGameCollection | null>(null);

  const updateCollection = async (collection: UserGameCollection) => {
    setPending(collection);
    setMessage("");

    try {
      const isSaved = await toggleCollection(collection, gameId);

      setMessage(
        isSaved
          ? collection === "favorites"
            ? "Removed from favorites"
            : "Removed from wishlist"
          : collection === "favorites"
            ? "Added to favorites"
            : "Added to wishlist",
      );
      setTimeout(() => setMessage(""), 3000);
      router.refresh();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Unable to update saved games",
      );
    } finally {
      setPending(null);
    }
  };

  if (authLoading || !user) {
    return null;
  }

  const feedback = message || (error ? "Unable to load saved games" : "");

  return (
    <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
      <button
        type="button"
        aria-label={
          state.favorites.includes(gameId)
            ? "Remove from favorites"
            : "Add to favorites"
        }
        title={
          state.favorites.includes(gameId)
            ? "Remove from favorites"
            : "Add to favorites"
        }
        disabled={pending !== null}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          void updateCollection("favorites");
        }}
        className="rounded-full bg-white/90 p-2 text-rose-600 shadow-sm transition hover:scale-105 hover:bg-white disabled:opacity-50 dark:bg-slate-950/90 dark:hover:bg-slate-900"
      >
        <Heart
          className={`h-4 w-4 ${
            state.favorites.includes(gameId) ? "fill-current" : ""
          }`}
        />
      </button>

      <button
        type="button"
        aria-label={
          state.wishlist.includes(gameId)
            ? "Remove from wishlist"
            : "Add to wishlist"
        }
        title={
          state.wishlist.includes(gameId)
            ? "Remove from wishlist"
            : "Add to wishlist"
        }
        disabled={pending !== null}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          void updateCollection("wishlist");
        }}
        className="rounded-full bg-white/90 p-2 text-indigo-600 shadow-sm transition hover:scale-105 hover:bg-white disabled:opacity-50 dark:bg-slate-950/90 dark:hover:bg-slate-900"
      >
        <ListPlus
          className={`h-4 w-4 ${
            state.wishlist.includes(gameId) ? "stroke-3" : ""
          }`}
        />
      </button>

      {feedback ? (
        <span className="absolute right-0 top-11 whitespace-nowrap rounded-lg bg-slate-950 px-2 py-1 text-xs text-white dark:bg-slate-100 dark:text-slate-950">
          {feedback}
        </span>
      ) : null}
    </div>
  );
}
