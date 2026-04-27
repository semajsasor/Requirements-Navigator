import { expect, test } from "@playwright/test";

const hasSupabaseE2E =
  Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
  Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  ) &&
  Boolean(process.env.E2E_AUTH_EMAIL) &&
  Boolean(process.env.E2E_AUTH_PASSWORD);

test("browsing guides from Explore", async ({ page }) => {
  await page.goto("/explore");

  await expect(page.getByRole("heading", { name: /browse requirement guides/i })).toBeVisible();
  await page.getByPlaceholder(/search by process/i).fill("passport");
  await expect(page.getByRole("heading", { name: /renew an adult passport/i })).toBeVisible();
});

test("viewing a guide shows checklist and sources", async ({ page }) => {
  await page.goto("/process/government-id-us");

  await expect(page.getByRole("heading", { name: /state government id/i })).toBeVisible();
  await expect(page.getByText(/required documents checklist/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: /source and review/i }).first()).toBeVisible();
});

test("signing in page accepts credentials", async ({ page }) => {
  await page.goto("/auth/sign-in");

  await page.getByLabel(/email/i).fill(process.env.E2E_AUTH_EMAIL ?? "demo@example.com");
  await page.getByLabel(/password/i).fill(process.env.E2E_AUTH_PASSWORD ?? "password123");

  await expect(page.getByRole("button", { name: /^sign in$/i })).toBeVisible();
});

test.describe("authenticated saved guide flows", () => {
  test.skip(!hasSupabaseE2E, "Set Supabase env plus E2E_AUTH_EMAIL/E2E_AUTH_PASSWORD to run authenticated e2e flows.");

  test.beforeEach(async ({ page }) => {
    await page.goto("/auth/sign-in");
    await page.getByLabel(/email/i).fill(process.env.E2E_AUTH_EMAIL!);
    await page.getByLabel(/password/i).fill(process.env.E2E_AUTH_PASSWORD!);
    await page.getByRole("button", { name: /^sign in$/i }).click();
    await expect(page).toHaveURL(/dashboard/);
  });

  test("saving a guide sends it to the dashboard", async ({ page }) => {
    await page.goto("/process/government-id-us");
    await page.getByRole("button", { name: /save to dashboard/i }).click();

    await expect(page).toHaveURL(/dashboard\/guides|dashboard/);
    await expect(page.getByText(/state government id/i)).toBeVisible();
  });

  test("tracking checklist progress persists in saved guide UI", async ({ page }) => {
    await page.goto("/dashboard");
    await page.getByRole("link", { name: /continue/i }).first().click();
    await page.getByRole("button", { name: /proof of identity/i }).click();

    await expect(page.getByText(/1 of/i).first()).toBeVisible();
  });
});
