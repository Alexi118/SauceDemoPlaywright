import { expect, test } from '../common/BasePage';
import data from '../data/loginData.json'

test.beforeEach('Login successfully',({loginPage})=>{
    loginPage.action_LogInSuccessfully();
})

test('Click on All Items', async ()=>{
    
})