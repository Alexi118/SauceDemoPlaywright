import { expect, test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import data from '../data/loginData.json'
import HomePage from '../pages/HomePage';
import { baseURL } from '../common/const';

test.describe("",()=>{
  let loginPage;
  let homePage;
test.beforeEach("", async ({page})=>{
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  await loginPage.goto();
})

test("Login", async ({page}) => {
  await loginPage.action_enterInfoAndSignIn(data.user1.name,data.user1.pass);
  await expect(homePage.app_logo()).toBeVisible();
})
})