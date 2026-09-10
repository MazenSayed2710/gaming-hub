"use client";

import dynamic from "next/dynamic";

const GameActions = dynamic(
  () => import("../games/GameActions").then((mod) => mod.GameActions),
  { ssr: false },
);

export function GameActionsLoader({ gameId }: { gameId: number }) {
  return <GameActions gameId={gameId} />;
}
