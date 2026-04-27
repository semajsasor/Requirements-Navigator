import { createAdminGuideAction, updateAdminGuideAction } from "@/lib/actions/admin-guides";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ProcessGuideRow } from "@/types/database";

type AdminGuideFormProps = {
  guide?: ProcessGuideRow;
};

const defaultEligibility = [
  {
    label: "Eligibility requirement",
    description: "Describe who qualifies for this process.",
  },
];

const defaultDocuments = [
  {
    name: "Required document",
    description: "Describe the document and acceptance rules.",
    required: true,
    acceptedFormats: ["Original", "Digital copy"],
  },
];

const defaultInstructions = [
  {
    order: 1,
    title: "First step",
    description: "Describe what the user should do first.",
  },
];

const defaultFees = [
  {
    label: "Application fee",
    amount: null,
    currency: "USD",
    required: false,
    notes: "Update with the current official fee.",
  },
];

const defaultTimeline = {
  min: 1,
  max: 2,
  unit: "weeks",
  display: "1 to 2 weeks",
};

const defaultFaq = [
  {
    question: "What should I confirm before applying?",
    answer: "Confirm the latest requirements with the official source.",
  },
];

const defaultSources = [
  {
    title: "Official source",
    publisher: "Government agency",
    url: "https://example.com",
    description: "Replace with the official source page.",
  },
];

function jsonValue(value: unknown) {
  return JSON.stringify(value, null, 2);
}

export function AdminGuideForm({ guide }: AdminGuideFormProps) {
  const action = guide ? updateAdminGuideAction : createAdminGuideAction;

  return (
    <form action={action} className="grid gap-6">
      {guide ? <input type="hidden" name="guideId" value={guide.id} /> : null}

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Guide basics</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <Field label="Title" name="title" defaultValue={guide?.title} required />
          <Field label="Slug" name="slug" defaultValue={guide?.slug} required />
          <Field label="Category" name="category" defaultValue={guide?.category} required />
          <Field
            label="Country code"
            name="country_code"
            defaultValue={guide?.country_code ?? "US"}
            required
          />
          <Field
            label="Country name"
            name="country_name"
            defaultValue={guide?.country_name ?? "United States"}
            required
          />
          <Field label="Region" name="region" defaultValue={guide?.region ?? ""} />
          <Field label="City" name="city" defaultValue={guide?.city ?? ""} />
          <Field
            label="Last reviewed date"
            name="last_reviewed_date"
            type="date"
            defaultValue={guide?.last_reviewed_date ?? new Date().toISOString().slice(0, 10)}
            required
          />
          <label className="grid gap-2 text-sm font-medium md:col-span-2">
            Summary
            <Textarea name="summary" defaultValue={guide?.summary} required />
          </label>
          <label className="grid gap-2 text-sm font-medium md:col-span-2">
            Who this is for
            <Textarea name="audience" defaultValue={guide?.audience} required />
          </label>
          <Field
            label="Tags"
            name="tags"
            defaultValue={guide?.tags.join(", ") ?? "requirements, checklist"}
            required
          />
          <label className="grid gap-2 text-sm font-medium">
            Difficulty
            <select
              name="difficulty"
              defaultValue={guide?.difficulty ?? "Medium"}
              className="h-10 rounded-md border bg-background px-3 text-sm"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Review status
            <select
              name="review_status"
              defaultValue={guide?.review_status ?? "draft"}
              className="h-10 rounded-md border bg-background px-3 text-sm"
            >
              <option value="draft">Draft review</option>
              <option value="reviewed">Reviewed</option>
              <option value="outdated">Outdated</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Status
            <select
              name="status"
              defaultValue={guide?.status ?? "draft"}
              className="h-10 rounded-md border bg-background px-3 text-sm"
            >
              <option value="draft">Draft</option>
              <option value="review">Review</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </label>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Structured content</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <JsonField
            label="Eligibility JSON"
            name="eligibility"
            value={guide?.eligibility ?? defaultEligibility}
          />
          <JsonField
            label="Required documents JSON"
            name="required_documents"
            value={guide?.required_documents ?? defaultDocuments}
          />
          <JsonField
            label="Step-by-step instructions JSON"
            name="instructions"
            value={guide?.instructions ?? defaultInstructions}
          />
          <JsonField label="Fees JSON" name="fees" value={guide?.fees ?? defaultFees} />
          <JsonField
            label="Estimated processing time JSON"
            name="estimated_processing_time"
            value={guide?.estimated_processing_time ?? defaultTimeline}
          />
          <JsonField
            label="Common mistakes JSON"
            name="common_mistakes"
            value={guide?.common_mistakes ?? ["Missing a required document."]}
          />
          <JsonField
            label="Practical tips JSON"
            name="tips"
            value={guide?.tips ?? ["Confirm requirements with the official source."]}
          />
          <JsonField label="FAQ JSON" name="faq" value={guide?.faq ?? defaultFaq} />
          <JsonField
            label="Official source links JSON"
            name="official_source_links"
            value={guide?.official_source_links ?? defaultSources}
          />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Button type="submit" name="intent" value="draft" variant="outline">
          Save draft
        </Button>
        <Button type="submit" name="intent" value="publish">
          Publish
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label}
      <Input name={name} type={type} defaultValue={defaultValue} required={required} />
    </label>
  );
}

function JsonField({
  label,
  name,
  value,
}: {
  label: string;
  name: string;
  value: unknown;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label}
      <Textarea
        name={name}
        defaultValue={jsonValue(value)}
        className="min-h-40 font-mono text-xs"
        required
      />
    </label>
  );
}
