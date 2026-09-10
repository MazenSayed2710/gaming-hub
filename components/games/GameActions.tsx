"use client";

import { Heart, ListPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@appwrite.io/react";
import { useRouter } from "next/navigation";

type UserGameCollection = "favorites" | "wishlist";

interface GameActionsProps {
  gameId: number;
}

interface CollectionState {
  favorites: number[];
  wishlist: number[];
}

export function GameActions({ gameId }: GameActionsProps) {
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();

  const [state, setState] = useState<CollectionState>({
    favorites: [],
    wishlist: [],
  });
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState<UserGameCollection | null>(null);

  useEffect(() => {
    if (!user) return;

    fetch("/api/user-games")
      .then(async (response) => {
        if (!response.ok) return;

        const data = (await response.json()) as CollectionState;
        setState(data);
      })
      .catch(() => setMessage("Unable to load saved games"));
  }, [user]);

  const updateCollection = async (collection: UserGameCollection) => {
    const isSaved = state[collection].includes(gameId);

    setPending(collection);
    setMessage("");

    try {
      const response = await fetch("/api/user-games", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          collection,
          gameId,
          action: isSaved ? "remove" : "add",
        }),
      });

      const data = (await response.json()) as {
        ids?: number[];
        error?: string;
      };

      if (!response.ok || !data.ids) {
        throw new Error(data.error || "Unable to update saved games");
      }

      setState((current) => ({
        ...current,
        [collection]: data.ids!,
      }));

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

      {message ? (
        <span className="absolute right-0 top-11 whitespace-nowrap rounded-lg bg-slate-950 px-2 py-1 text-xs text-white dark:bg-slate-100 dark:text-slate-950">
          {message}
        </span>
      ) : null}
    </div>
  );
}
