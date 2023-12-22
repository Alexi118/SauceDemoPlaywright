import {Locator, Page, test} from '@playwright/test'

export default class HomePage{
    readonly page: Page;

    constructor(page){
        this.page = page;
    }

    readonly app_logo = () => this.page.locator(".app_logo");
    //Burger Button
    readonly burger_Btn = () => this.page.locator("#react-burger-menu-btn");
    readonly burger_itemlist = () => this.page.locator(".bm-item-list");
    readonly burger_allItems_Btn = () =>this.page.locator("#inventory_sidebar_link");
    readonly burger_About_Btn = () =>this.page.locator("#about_sidebar_link");
    readonly burger_LogOut_Btn = () =>this.page.locator("#logout_sidebar_link");
    readonly burger_ResetAppSate_Btn = () =>this.page.locator("#reset_sidebar_link");
    //Footer
    readonly footer_twitter = () => this.page.locator(".social_twitter a");
    readonly footer_facebook = () => this.page.locator(".social_facebook a");
    readonly footer_linkedin = () => this.page.locator(".social_linkedin a");
    readonly footer_copyright = () => this.page.locator(".footer_copy");
    //Items
    readonly list_item_names = () => this.page.locator(".inventory_list .inventory_item_name").all;

    public async gotoHomePage(){
        await this.page.goto('/inventory.html')
    }
}