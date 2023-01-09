import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Email Obfuscator Webcomponent/);
});

test("renders custom element in plain html with correct email", async ({
  page,
}) => {
  await page.goto("/");
  const component = page.locator("email-address");
  await expect(component).toContainText("This is a customised mailto link");
  const link = component.getByRole("link");
  await expect(link).toBeVisible();
  const href = await link.getAttribute("href");
  expect(href).toContain("mailto:");
  await expect(link).toContainText("test@example.com");
});

test("renders custom element in react with correct email", async ({ page }) => {
  await page.goto("/react/");
  const component = page.locator("email-address");
  const link = component.getByRole("link");
  await expect(link).toBeVisible();
  const href = await link.getAttribute("href");
  expect(href).toContain("mailto:");
  await expect(link).toContainText("test@example.com");
});

test("renders custom element in vue with correct email", async ({ page }) => {
  await page.goto("/vue/");
  const component = page.locator("email-address");
  const link = component.getByRole("link");
  await expect(link).toBeVisible();
  const href = await link.getAttribute("href");
  expect(href).toContain("mailto:");
  await expect(link).toContainText("test@example.com");
});