import { Bell, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { updateSavedGuideNotesAction } from "@/lib/actions/saved-guides";
import {
  savedGuideReminderOptions,
  type SavedGuideReminderId,
} from "@/lib/dashboard/reminders";

export function SavedGuideNotes({
  savedGuideId,
  notes,
  reminders,
}: {
  savedGuideId: string;
  notes: string | null;
  reminders: SavedGuideReminderId[] | null;
}) {
  const selectedReminders = new Set(reminders ?? []);

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Private notes and reminders</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={updateSavedGuideNotesAction} className="grid gap-3">
          <input type="hidden" name="savedGuideId" value={savedGuideId} />
          <label className="grid gap-2 text-sm font-medium">
            Notes for this guide
            <Textarea
              name="notes"
              defaultValue={notes ?? ""}
              placeholder="Add appointment details, document locations, confirmation numbers, or reminders."
              className="min-h-32"
            />
          </label>
          <fieldset className="grid gap-3">
            <legend className="flex items-center gap-2 text-sm font-medium">
              <Bell className="h-4 w-4 text-primary" aria-hidden="true" />
              Quick reminders
            </legend>
            <div className="grid gap-2">
              {savedGuideReminderOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex gap-3 rounded-md border bg-[#fbfdfc] p-3 text-sm"
                >
                  <input
                    type="checkbox"
                    name="reminders"
                    value={option.id}
                    defaultChecked={selectedReminders.has(option.id)}
                    className="mt-1 h-4 w-4 rounded border-input accent-primary"
                  />
                  <span>
                    <span className="block font-medium text-foreground">
                      {option.label}
                    </span>
                    <span className="mt-1 block leading-5 text-muted-foreground">
                      {option.description}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <Button type="submit" variant="outline" className="bg-white">
            <Save className="h-4 w-4" aria-hidden="true" />
            Save notes and reminders
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
