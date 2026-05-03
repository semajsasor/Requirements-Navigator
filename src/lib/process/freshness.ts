import type { ContentReviewStatus } from "@/types/process";

export const RECENT_REVIEW_DAYS = 30;

export function getDaysSinceReview(
  lastReviewedDate: string,
  referenceDate = new Date(),
) {
  const reviewedAt = parseDateOnly(lastReviewedDate);

  if (!reviewedAt) {
    return null;
  }

  const referenceUtc = Date.UTC(
    referenceDate.getUTCFullYear(),
    referenceDate.getUTCMonth(),
    referenceDate.getUTCDate(),
  );

  return Math.floor((referenceUtc - reviewedAt.getTime()) / 86_400_000);
}

export function isRecentlyReviewed(
  lastReviewedDate: string,
  referenceDate = new Date(),
) {
  const daysSinceReview = getDaysSinceReview(lastReviewedDate, referenceDate);

  return (
    daysSinceReview !== null &&
    daysSinceReview >= 0 &&
    daysSinceReview <= RECENT_REVIEW_DAYS
  );
}

export function getReviewStatusLabel(reviewStatus: ContentReviewStatus) {
  if (reviewStatus === "reviewed") {
    return "Reviewed";
  }

  if (reviewStatus === "outdated") {
    return "Outdated";
  }

  return "Needs review";
}

export function getReviewStatusDescription(reviewStatus: ContentReviewStatus) {
  if (reviewStatus === "reviewed") {
    return "This guide has a recorded editorial review date.";
  }

  if (reviewStatus === "outdated") {
    return "This guide may contain older details and should be checked carefully.";
  }

  return "This guide is still waiting for a full editorial review.";
}

function parseDateOnly(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

  if (!match) {
    return null;
  }

  const [, year, month, day] = match;

  return new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day)),
  );
}
