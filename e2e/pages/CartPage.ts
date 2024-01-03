import {Locator, Page, test} from '@playwright/test'

export default class CartPage{
    readonly page: Page;
    readonly checkOut_Btn: Locator;
    readonly list_item_prices_Txt: Locator;

    constructor(page){
        this.checkOut_Btn = page.locator("#checkout");
        this.list_item_prices_Txt = page.locator(".inventory_item_price");
    }
}