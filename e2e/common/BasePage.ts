import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

type BasePage={
    loginPage: LoginPage;
    homePage: HomePage;
}

export const test = base.extend<BasePage>({
    loginPage: async ({page},use)=>{
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },
    homePage: async ({page},use)=>{
        let homePage = new HomePage(page);
        await use(homePage);
    },
});

export { expect } from '@playwright/test';