
const { test, expect } = require('@playwright/test');
import {LoginPage} from '../Pages/login'

test('Test 1 Example', async ({ page }) => {

    const Login = new LoginPage(page)
    
     // Go to Wesite 
    Login.goToLoginPageURL();
    //Enter user name and Password and click login .
    Login.fullLogin('standard_user','secret_sauce')
    
    //After Login Check Title 
    await expect(page.locator('.title')).toContainText('Products');
    

  });