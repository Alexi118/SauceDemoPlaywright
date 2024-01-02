import { expect, test } from '../common/BasePage';
import data from '../data/loginData.json';
import * as common from '../common/common.ts';

test.beforeEach('Login successfully', async ({loginPage, homePage})=>{
    await loginPage.action_LogInSuccessfully();
})

// test('Verify items on burger button', async ({homePage,page})=>{
//     await homePage.burger_Btn.click();
//     await expect(homePage.burger_itemlist_Txt).toHaveText(['All Items','About','Logout','Reset App State']);
// })

// test('Click on About', async ({page,homePage})=>{
//     await homePage.burger_Btn.click();
//     await homePage.burger_About_Btn.click();
//     expect(page.url()).toBe('https://saucelabs.com/')
// })

// test('Click on LogOut', async ({page,homePage,loginPage})=>{
//     await homePage.burger_Btn.click();
//     await homePage.burger_LogOut_Btn.click();
//     expect(page.url()).toBe('https://www.saucedemo.com/');
//     await expect(loginPage.username_txt).toBeVisible();
// })

// test('Verify footer', async ({homePage})=>{
//     await expect(homePage.footer_twitter).toHaveAttribute('href','https://twitter.com/saucelabs');
//     await expect(homePage.footer_facebook).toHaveAttribute('href','https://www.facebook.com/saucelabs');
//     await expect(homePage.footer_linkedin).toHaveAttribute('href','https://www.linkedin.com/company/sauce-labs/');
//     await expect(homePage.footer_copyright).toHaveText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy'); 
// })

// test('Verify sorting item by Name(A to Z)', async ({homePage,page})=>{
//   const listBeforeSort = await common.getListOfElements(homePage.list_item_names_Txt);
//   await homePage.dropdown_filter.selectOption({value:"az"});
//   expect(common.sortListFromAtoZ(listBeforeSort)).toEqual(await common.getListOfElements(homePage.list_item_names_Txt));
// })

// test('Verify sorting item by Name(Z to A)', async ({homePage})=>{
//   const listBeforeSort = await common.getListOfElements(homePage.list_item_names_Txt);
//   await homePage.dropdown_filter.selectOption({value:"za"});
//   expect(common.sortListFromZtoA(listBeforeSort)).toEqual(await common.getListOfElements(homePage.list_item_names_Txt));
// })

// test('Verify sorting item by Price(low to high)', async ({homePage})=>{

// })

test('Verify sorting item by Price(high to low)', async ({homePage})=>{
    const listBeforeSort = await common.getListOfElements(homePage.list_item_prices_Text);
    console.log(listBeforeSort);
    await homePage.dropdown_filter.selectOption({value:"hilo"});
    console.log(await common.sortListFromZtoA(listBeforeSort));
    console.log(await common.getListOfElements(homePage.list_item_prices_Text));
    //expect(await common.sortListFromZtoA(listBeforeSort)).toEqual(await common.getListOfElements(homePage.list_item_prices_Text));
})
