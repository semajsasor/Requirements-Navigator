import { Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { updateSavedGuideNotesAction } from "@/lib/actions/saved-guides";

export function SavedGuideNotes({
  savedGuideId,
  notes,
}: {
  savedGuideId: string;
  notes: string | null;
}) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Private notes</CardTitle>
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
          <Button type="submit" variant="outline" className="bg-white">
            <Save className="h-4 w-4" aria-hidden="true" />
            Save notes
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
