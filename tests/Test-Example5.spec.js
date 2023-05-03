const { test, expect } = require('@playwright/test');

test('Test 5 Example', async ({ page }) => {


    await page.pause();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').type('standard_user',{delay:150});
    await page.locator('#password').fill('secret_sauce');
    await page.locator('[id="login-button"]').click();
    await expect(page.locator('.title')).toContainText('Products'); 
    await page.waitForTimeout(3000); 
    

  });