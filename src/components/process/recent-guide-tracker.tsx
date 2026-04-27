"use client";

import { useEffect } from "react";

type RecentGuide = {
  slug: string;
  title: string;
  category: string;
  viewedAt: string;
};

export function RecentGuideTracker({
  slug,
  title,
  category,
}: {
  slug: string;
  title: string;
  category: string;
}) {
  useEffect(() => {
    const key = "requirements-navigator:recent-guides";
    const raw = window.localStorage.getItem(key);
    let existing: RecentGuide[] = [];

    if (raw) {
      try {
        existing = JSON.parse(raw);
      } catch {
        existing = [];
      }
    }

    const next = [
      { slug, title, category, viewedAt: new Date().toISOString() },
      ...existing.filter((guide) => guide.slug !== slug),
    ].slice(0, 6);

    window.localStorage.setItem(key, JSON.stringify(next));
    window.dispatchEvent(new Event("requirements-navigator:recent-guides"));
  }, [category, slug, title]);

  return null;
}
