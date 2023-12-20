//import { expect, test } from '../common/BasePage';
import { expect, test } from '@playwright/test';

test("Verify page title", async ({page}) => {
  await page.goto('/');
  await expect(page.locator(".app_logo")).toBeVisible();
})

test("Verify burger Button is visible", async ({page}) => {
  await page.goto('/');
  await expect(page.locator("#react-burger-menu-btn")).toBeVisible();
})