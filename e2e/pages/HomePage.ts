import {Locator, Page, test} from '@playwright/test'
import { baseURL } from '../common/const';

export default class HomePage{
    readonly page: Page;
    readonly app_logo: Locator;
    readonly burger_Btn: Locator;

    constructor(page){
        this.page = page;
        this.app_logo = page.locator(".app_logo");
        this.burger_Btn = page.locator("#react-burger-menu-btn");
    }

    public async goto(){
        await this.page.goto(baseURL + 'inventory.html')
    }
}