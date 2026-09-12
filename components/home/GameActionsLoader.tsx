"use client";

import dynamic from "next/dynamic";
import { useAppwrite, useUser } from "@appwrite.io/react";

const GameActions = dynamic(
  () => import("../games/GameActions").then((mod) => mod.GameActions),
  { ssr: false },
);

export function GameActionsLoader({ gameId }: { gameId: number }) {
  const { user } = useUser();
  const { ssr } = useAppwrite();

  // Keep the dynamic boundary stable while a server session is being resolved.
  if (!ssr.session && !user) {
    return null;
  }

  return <GameActions gameId={gameId} />;
}
