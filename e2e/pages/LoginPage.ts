import {Locator, Page, test} from '@playwright/test'
import data from '../data/loginData.json'

export default class LoginPage{
    readonly page: Page;
    readonly username_txt: Locator;
    readonly password_txt: Locator;
    readonly signIn_Btn: Locator;
    readonly error_mess: Locator;

    constructor(page){
        this.page = page;
        this.username_txt = page.locator("#user-name");
        this.password_txt = page.locator("#password");
        this.signIn_Btn = page.locator("#login-button");
        this.error_mess = page.locator("h3[data-test=error]");
    }

    public async gotoLoginPage(){
        await this.page.goto('/');
    }

    public async action_enterInfoAndSignIn(user: string, pass: string){
        await this.gotoLoginPage();
        await this.username_txt.fill(user);
        await this.password_txt.fill(pass);
        await this.signIn_Btn.click();          
    }

    public async action_LogInSuccessfully(){
        await this.gotoLoginPage();
        await this.username_txt.fill(data.user1.name);
        await this.password_txt.fill(data.user1.pass);
        await this.signIn_Btn.click();          
    }
}