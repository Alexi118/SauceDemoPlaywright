import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

type BasePage={
    loginPage: LoginPage;
    homePage: HomePage;
}

export const test = base.extend<BasePage>({
    loginPage: async ({page},use)=>{
        let loginPage = await use( new LoginPage(page));
    },
    homePage: async ({page},use)=>{
        let homePage = await use( new HomePage(page));
    },
});

export { expect } from '@playwright/test';