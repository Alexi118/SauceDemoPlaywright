import {Locator, Page, test} from '@playwright/test'

export default class FirstCheckOutPage{
    readonly page: Page;
    readonly continue_Btn: Locator;
    readonly firstName_Txt: Locator;
    readonly lastName_Txt: Locator;
    readonly ZipCode_Txt: Locator;

    constructor(page){
        this.continue_Btn = page.locator("#continue");
        this.firstName_Txt = page.locator("#first-name");
        this.lastName_Txt = page.locator("#last-name");
        this.ZipCode_Txt = page.locator("#postal-code");
    }

    public async fillInInformation(firstName:string, lastName:string, zipCode:string){
        await this.firstName_Txt.fill(firstName);
        await this.lastName_Txt.fill(lastName);
        await this.ZipCode_Txt.fill(zipCode);
    }
}