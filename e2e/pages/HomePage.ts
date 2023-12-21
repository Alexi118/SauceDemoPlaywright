import {Locator, Page, test} from '@playwright/test'

export default class HomePage{
    readonly page: Page;

    constructor(page){
        this.page = page;
    }

    readonly app_logo = () => this.page.locator(".app_logo");
    readonly burger_Btn = () => this.page.locator("#react-burger-menu-btn");
    readonly burger_allItems_Btn = () =>this.page.locator("");
    readonly burger_About_Btn = () =>this.page.locator("");
    readonly burger_LogOut_Btn = () =>this.page.locator("");
    readonly burger_ResetAppSate_Btn = () =>this.page.locator("");

    public async gotoHomePage(){
        await this.page.goto('/inventory.html')
    }
}