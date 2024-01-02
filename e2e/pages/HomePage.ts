import {Locator, Page, test} from '@playwright/test'

export default class HomePage{
    readonly page: Page;
    readonly app_logo: Locator;
    readonly burger_Btn: Locator;
    readonly burger_itemlist_Txt: Locator;
    readonly burger_allItems_Btn: Locator;
    readonly burger_About_Btn: Locator;
    readonly burger_LogOut_Btn: Locator;
    readonly burger_ResetAppSate_Btn: Locator;
    readonly footer_twitter: Locator;
    readonly footer_facebook: Locator;
    readonly footer_linkedin: Locator;
    readonly footer_copyright: Locator;
    readonly list_item_names_Txt: Locator;
    readonly list_item_prices_Text: Locator;
    readonly dropdown_filter: Locator;

    constructor(page){
        this.page = page;
        this.app_logo = page.locator(".app_logo");
        //Burger Button
        this.burger_Btn = page.locator("#react-burger-menu-btn");
        this.burger_itemlist_Txt = page.locator(".bm-item-list > a");
        this.burger_allItems_Btn = page.locator("#inventory_sidebar_link");
        this.burger_About_Btn = page.locator("#about_sidebar_link");
        this.burger_LogOut_Btn = page.locator("#logout_sidebar_link");
        this.burger_ResetAppSate_Btn = this.page.locator("#reset_sidebar_link");
        //Footer
        this.footer_twitter = page.locator(".social_twitter a");
        this.footer_facebook = page.locator(".social_facebook a");
        this.footer_linkedin = page.locator(".social_linkedin a");
        this.footer_copyright = page.locator(".footer_copy");
        //Items
        this.list_item_names_Txt = page.locator(".inventory_item_name");
        this.list_item_prices_Text = page.locator(".inventory_item_price");
        //Dropdown filter
        this.dropdown_filter = page.locator(".product_sort_container")
    }

    public async gotoHomePage(){
        await this.page.goto('/inventory.html');
    }
}