import { describe, expect, it } from "vitest";

import {
  getSavedGuideReminderLabels,
  sanitizeSavedGuideReminders,
} from "@/lib/dashboard/reminders";

describe("saved guide reminders", () => {
  it("keeps only supported reminder ids from form values", () => {
    expect(
      sanitizeSavedGuideReminders([
        "bring_photocopies",
        "not-a-real-reminder",
        "verify_payment_method",
      ]),
    ).toEqual(["bring_photocopies", "verify_payment_method"]);
  });

  it("maps saved reminder ids to user-facing labels", () => {
    expect(getSavedGuideReminderLabels(["bring_extra_valid_id"])).toEqual([
      "Bring extra valid ID",
    ]);
  });

  it("handles missing reminder arrays from older saved guide rows", () => {
    expect(getSavedGuideReminderLabels(undefined)).toEqual([]);
  });
});
