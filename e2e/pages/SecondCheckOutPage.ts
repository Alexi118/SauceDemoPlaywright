import {Locator, Page, test} from '@playwright/test'

export default class SecondCheckOutPage{
    readonly page: Page;
    readonly finish_Btn: Locator;
    readonly list_item_prices_Txt: Locator;
    readonly itemTotal_Txt: Locator;
    readonly tax_Txt: Locator;
    readonly finalPrice_Txt: Locator;

    constructor(page){
        this.finish_Btn = page.locator("#finish");
        this.list_item_prices_Txt = page.locator(".inventory_item_price");
        this.itemTotal_Txt = page.locator(".summary_subtotal_label");
        this.tax_Txt = page.locator(".summary_tax_label");
        this.finalPrice_Txt = page.locator("[class='summary_info_label summary_total_label']");
    }
}