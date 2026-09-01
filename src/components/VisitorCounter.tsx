"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "card-1gb-visitors";
const BASE = 49999;

let clientCount: number | null = null;

function formatCount(n: number): string {
  return n.toString().padStart(7, "0");
}

function subscribe() {
  return () => {};
}

function getClientCount() {
  if (clientCount !== null) {
    return clientCount;
  }
  const raw = window.localStorage.getItem(STORAGE_KEY);
  const prev = raw ? Number.parseInt(raw, 10) : BASE;
  const next = Number.isFinite(prev) ? prev + 1 : BASE + 1;
  window.localStorage.setItem(STORAGE_KEY, String(next));
  clientCount = next;
  return next;
}

function getServerCount() {
  return BASE;
}

export function VisitorCounter() {
  const count = useSyncExternalStore(subscribe, getClientCount, getServerCount);

  return (
    <span
      className="counter"
      title="This browser's local guestbook, not a token holder count."
    >
      {formatCount(count)}
    </span>
  );
}
