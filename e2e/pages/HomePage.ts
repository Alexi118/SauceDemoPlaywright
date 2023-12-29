import {Locator, Page, test} from '@playwright/test'

export default class HomePage{
    readonly page: Page;
    readonly app_logo: Locator;

    constructor(page){
        this.page = page;
        this.page.locator(".app_logo");
    }

    //Burger Button
    readonly burger_Btn = () => this.page.locator("#react-burger-menu-btn");
    readonly burger_itemlist_Txt = () => this.page.locator(".bm-item").allInnerTexts();
    readonly burger_allItems_Btn = () =>this.page.locator("#inventory_sidebar_link");
    readonly burger_About_Btn = () =>this.page.locator("#about_sidebar_link");
    readonly burger_LogOut_Btn = () =>this.page.locator("#logout_sidebar_link");
    readonly burger_ResetAppSate_Btn = () =>this.page.locator("#reset_sidebar_link").all;
    //Footer
    readonly footer_twitter = () => this.page.locator(".social_twitter a");
    readonly footer_facebook = () => this.page.locator(".social_facebook a");
    readonly footer_linkedin = () => this.page.locator(".social_linkedin a");
    readonly footer_copyright = () => this.page.locator(".footer_copy");
    //Items
    //readonly list_item_names_Txt = () => this.page.locator(".inventory_item_name").allInnerTexts().then(res =>{ return this.list_item_names_Txt = res});

    public async gotoHomePage(){
        await this.page.goto('/inventory.html');
    }
}