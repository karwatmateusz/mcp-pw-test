import { test, expect } from '@playwright/test';

test('playwright.dev test', async ({ page }) => {
  await page.goto('/');
  
  // Check that we have the title
  await expect(page).toHaveTitle(/Playwright/);
  
  // Ensure the getting started link is visible
  const gettingStarted = page.getByRole('link', { name: 'Getting started' });
  await expect(gettingStarted).toBeVisible();
});