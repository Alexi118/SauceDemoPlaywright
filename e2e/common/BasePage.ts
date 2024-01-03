import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import FirstCheckOutPage from '../pages/FirstCheckOutPage';
import SecondCheckOutPage from '../pages/SecondCheckOutPage';
import CompletePage from '../pages/CompletePage';

type BasePage={
    loginPage: LoginPage;
    homePage: HomePage;
    cartPage: CartPage;
    firstCheckOutPage: FirstCheckOutPage;
    secondCheckOutPage: SecondCheckOutPage;
    completePage: CompletePage;
}

export const test = base.extend<BasePage>({
    loginPage: async ({page},use)=>{
        await use( new LoginPage(page));
    },
    homePage: async ({page},use)=>{
        await use( new HomePage(page));
    },
    cartPage: async ({page},use)=>{
        await use( new CartPage(page));
    },
    firstCheckOutPage: async ({page},use)=>{
        await use( new FirstCheckOutPage(page));
    },
    secondCheckOutPage: async ({page},use)=>{
        await use( new SecondCheckOutPage(page));
    },
    completePage: async ({page},use)=>{
        await use( new CompletePage(page));
    },
});

export { expect } from '@playwright/test';