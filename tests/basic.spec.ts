import { test, expect } from "@playwright/test";

// test("my first playwright test", async ({ page }) => {
//   await page.goto("https://playwright.dev/");
//   await expect(page).toHaveTitle(/Playwright/);
//   const getStartedLink = page.getByRole("link", { name: "Get Started" });
//   await getStartedLink.click();
//   const isVisible = page
//     .getByRole("heading", { name: "Installation" })
//     .isVisible();
//   console.log(`Is the heading visible? ${isVisible}`);
//   await expect(
//     page.getByRole("heading", { name: "Installation" }),
//   ).toBeVisible();

//   console.log("✅ Checkpoint Passed: Installation heading is visible");
// });

test("my second playwright test", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro");
  await page.getByRole("link", { name: "How to install Playwright" }).click();
  await expect(
    page.getByText("Using npm, yarn or pnpm").first(),
    
  ).toBeVisible();
  console.log("Verified Intro!!");
});
