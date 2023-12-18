import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.pause();
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Playwright');
});