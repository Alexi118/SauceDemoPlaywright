import {Page, test} from '@playwright/test'
import { baseURL } from '../common/const';

export default class LoginPage{
    page: Page;

    constructor(page){
        this.page = page;
    }

    username_txt = () => this.page.locator("#user-name");
    password_txt = () => this.page.locator("#password");
    signIn_Btn = () => this.page.locator("#login-button");

    public async goto(){
        await this.page.goto(baseURL)
    }

    public async action_enterInfoAndSignIn(user: string, pass: string){
        await this.username_txt().fill(user);
        await this.password_txt().fill(pass);
        await this.signIn_Btn().click();          
    }
}