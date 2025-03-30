import { test, expect } from '@playwright/test';

test('sample test for cross-repository trigger v3', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
  
  // Add a simple assertion to test the workflow
  const heading = page.getByRole('heading', { name: /Playwright/ });
  await expect(heading).toBeVisible();
});