const { test, expect } = require('@playwright/test');

test('Test 2 Example', async ({ page }) => {

    // Go to Wesite 
    await page.goto('https://www.saucedemo.com/');
  
    // Input in Elememnt by Tape Using ID Selector 
    await page.locator('#user-name').type('standard_user',{delay:150});
    // also can use 
    //await page.locator('id=user-name').type('standard_user',{delay:150});
    //await page.locator('[id=user-name]').type('standard_user',{delay:150});

    // Input in Elememnt by fill 
    await page.locator('#password').fill('secret_sauce');
    //Using Xpath Element 
    //await page.locator('xpath=input[@name="password"]').fill('secret_sauce');
    //await page.locator('//input[@name="password" ]').fill('secret_sauce');

    //input[@name="password" ]
    // Click login Button 
    await page.locator('[id="login-button"]').click();
    // Using CSS Selector 
    //await page.locator('#login-button').click(); 
    //Using Text Selector 
    //await page.locator('text=LOGIN').click(); 
    //await page.locator('input:has-text("LOGIN")').click(); 

    //After Login Check Title 
    await expect(page.locator('.title')).toContainText('Products');

    //Wait 3 seconds 
    await page.waitForTimeout(3000); 
    

  });