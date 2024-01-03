import {Locator, Page, test} from '@playwright/test'

export default class CompletePage{
    readonly page: Page;
    readonly backHome_Btn: Locator;

    constructor(page){
        this.backHome_Btn = page.locator("#back-to-products");
    }
}