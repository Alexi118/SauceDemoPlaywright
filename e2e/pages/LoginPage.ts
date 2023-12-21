import {Locator, Page, test} from '@playwright/test'
import data from '../data/loginData.json'

export default class LoginPage{
    readonly page: Page;

    constructor(page){
        this.page = page;
    }

    readonly username_txt = () => this.page.locator("#user-name");
    readonly password_txt = () => this.page.locator("#password");
    readonly signIn_Btn = () => this.page.locator("#login-button");
    readonly error_mess = () => this.page.locator("h3[data-test=error]");

    public async gotoLoginPage(){
        await this.page.goto('/');
    }

    public async action_enterInfoAndSignIn(user: string, pass: string){
        await this.gotoLoginPage();
        await this.username_txt().fill(user);
        await this.password_txt().fill(pass);
        await this.signIn_Btn().click();          
    }

    public async action_LogInSuccessfully(){
        await this.gotoLoginPage();
        await this.username_txt().fill(data.user1.name);
        await this.password_txt().fill(data.user1.pass);
        await this.signIn_Btn().click();          
    }
}