import { expect, test } from '../common/BasePage';
import * as common from '../common/common.ts';
import { baseURL } from '../common/const.ts';
import FirstCheckOutPage from '../pages/FirstCheckOutPage.ts';

test.beforeEach('Login successfully', async ({loginPage})=>{
    await loginPage.action_LogInSuccessfully();
})

test('Full E2E Purchasing Flow', async ({page,homePage,cartPage,firstCheckOutPage,secondCheckOutPage,completePage})=>{
    await homePage.addRemvoveFirstItem_Btn.click();
    await homePage.addRemvoveSecondItem_Btn.click();
    await homePage.addRemvoveThirdItem_Btn.click();
    expect(await homePage.cart_Count.innerText()).toBe("3");
    await homePage.cart_Link.click();
    await expect (page.url()).toBe(`${baseURL}cart.html`);
    const totalOnCart = await common.getSumOfListElements(cartPage.list_item_prices_Txt);
    await cartPage.checkOut_Btn.click();
    expect (await page.url()).toBe(`${baseURL}checkout-step-one.html`);
    await firstCheckOutPage.fillInInformation('Nguyen','Duc Cuong','123456');
    await firstCheckOutPage.continue_Btn.click();
    expect (await page.url()).toBe(`${baseURL}checkout-step-two.html`);
    const totalOnOverview = await common.getSumOfListElements(secondCheckOutPage.list_item_prices_Txt);
    expect (totalOnCart).toEqual(totalOnOverview);
    expect (await secondCheckOutPage.itemTotal_Txt.innerText()).toEqual(`Item total: $${totalOnOverview}`)
    expect (await secondCheckOutPage.tax_Txt.innerText()).toEqual(`Tax: $${common.taxCalculation(totalOnOverview)}`)
    // await secondCheckOutPage.finish_Btn.click();
    // expect (await page.url()).toBe(`${baseURL}checkout-complete.html`);
    // await completePage.backHome_Btn.click();
    // expect (await page.url()).toBe(`${baseURL}inventory.html`);
})