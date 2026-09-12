"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getSavedGames,
  updateSavedGames,
  type CollectionState,
} from "@/lib/api/user-games";
import type { UserGameCollection } from "@/lib/user-games";

const emptyState: CollectionState = { favorites: [], wishlist: [] };

export function useSavedGames(userId: string | undefined) {
  const queryClient = useQueryClient();
  // Appwrite clears the auth query namespace on sign-out.
  const queryKey = ["auth", "user-games", userId] as const;
  const queryOptions = {
    queryKey,
    queryFn: ({ signal }: { signal: AbortSignal }) => getSavedGames(signal),
    staleTime: 60_000,
  };
  const { data, error } = useQuery({
    ...queryOptions,
    enabled: Boolean(userId),
    gcTime: 0,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const toggleCollection = async (
    collection: UserGameCollection,
    gameId: number,
  ) => {
    if (!userId) throw new Error("Unable to update saved games");

    const current = await queryClient.ensureQueryData(queryOptions);
    const isSaved = current[collection].includes(gameId);
    await queryClient.cancelQueries({ queryKey });
    const ids = await updateSavedGames(
      collection,
      gameId,
      isSaved ? "remove" : "add",
    );
    queryClient.setQueryData<CollectionState>(queryKey, (state) => ({
      ...(state ?? current),
      [collection]: ids,
    }));
    return isSaved;
  };

  return { state: data ?? emptyState, error, toggleCollection };
}
