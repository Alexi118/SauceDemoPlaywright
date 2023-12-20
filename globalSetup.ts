import { test, expect } from "@playwright/test";
import data from './e2e/data/loginData.json';

test('Login', async ({ page }) => {
    await page.goto('/');
    await page.locator("#user-name").fill(data.user1.name);
    await page.locator("#password").fill(data.user1.pass);
    await page.locator("#login-button").click();
    await expect(page.locator(".app_logo")).toBeVisible({timeout:30000});

    // Save the state of the webpage - logged in
    await page.context().storageState({path: "./LoginAuth.json"});
});