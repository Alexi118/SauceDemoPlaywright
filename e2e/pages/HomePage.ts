import {Page, test} from '@playwright/test'
import { baseURL } from '../common/const';

export default class HomePage{
    page: Page;

    constructor(page){
        this.page = page;
    }

    app_logo = () => this.page.locator(".app_logo");

    public async goto(){
        await this.page.goto(baseURL + 'inventory.html')
    }
}