import { expect, test } from '../common/BasePage';
import data from '../data/loginData.json'

test("Verify Login to homepage successfully", async ({loginPage,homePage}) => {
  await loginPage.action_enterInfoAndSignIn(data.user1.name, data.user1.pass);
  await expect(homePage.app_logo).toBeVisible();
})

test("Verify error when log in with empty user", async ({loginPage}) => {
  await loginPage.action_enterInfoAndSignIn('', data.user1.pass);
  await expect(loginPage.error_mess).toHaveText('Epic sadface: Username is required')
})

test("Verify error when log in with empty pass", async ({loginPage}) => {
  await loginPage.action_enterInfoAndSignIn(data.user1.name,'');
  await expect(loginPage.error_mess).toHaveText('Epic sadface: Password is required')
})
test("Verify error when log in with wrong user", async ({loginPage}) => {
  await loginPage.action_enterInfoAndSignIn(data.user2.name, data.user2.pass);
  await expect(loginPage.error_mess).toHaveText('Epic sadface: Username and password do not match any user in this service');
})

test("Verify error when log in with wrong pass", async ({loginPage}) => {
  await loginPage.action_enterInfoAndSignIn(data.user3.name, data.user3.pass);
  await expect(loginPage.error_mess).toHaveText('Epic sadface: Username and password do not match any user in this service');
})