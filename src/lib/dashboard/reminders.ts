export type SavedGuideReminderId =
  | "bring_photocopies"
  | "check_appointment_confirmation"
  | "verify_payment_method"
  | "bring_extra_valid_id";

export type SavedGuideReminderOption = {
  id: SavedGuideReminderId;
  label: string;
  description: string;
};

export const savedGuideReminderOptions: SavedGuideReminderOption[] = [
  {
    id: "bring_photocopies",
    label: "Bring photocopies",
    description: "Prepare extra copies of IDs, forms, and supporting documents.",
  },
  {
    id: "check_appointment_confirmation",
    label: "Check appointment confirmation",
    description: "Save your appointment email, QR code, or reference number.",
  },
  {
    id: "verify_payment_method",
    label: "Verify payment method",
    description: "Confirm whether the office accepts cash, card, or online payment.",
  },
  {
    id: "bring_extra_valid_id",
    label: "Bring extra valid ID",
    description: "Carry one backup valid ID in case the primary ID is rejected.",
  },
];

const reminderIds = new Set(savedGuideReminderOptions.map((option) => option.id));

export function sanitizeSavedGuideReminders(values: FormDataEntryValue[]) {
  return values
    .map((value) => String(value))
    .filter((value): value is SavedGuideReminderId =>
      reminderIds.has(value as SavedGuideReminderId),
    );
}

export function getSavedGuideReminderLabels(
  reminders: SavedGuideReminderId[] | null | undefined,
) {
  const selected = new Set(Array.isArray(reminders) ? reminders : []);

  return savedGuideReminderOptions
    .filter((option) => selected.has(option.id))
    .map((option) => option.label);
}
