"use client";

import { useState } from "react";

interface AboutProps {
  text: string;
}

export default function About({ text }: AboutProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight">About this game</h2>

      <div
        style={{
          maxHeight: expanded ? undefined : "6.5rem",
        }}
        className="mt-3 overflow-hidden text-base leading-7 text-slate-600 dark:text-slate-400 transition-all"
      >
        {text || "More details will be available soon."}
      </div>

      {text && text.length > 350 ? (
        <button
          type="button"
          onClick={() => setExpanded((s) => !s)}
          className="mt-3 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}
