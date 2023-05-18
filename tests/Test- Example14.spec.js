const { test, expect } = require('@playwright/test');

test('Test 2 Example', async ({ page }) => {

    // Go to Wesite 
    await page.goto('https://www.saucedemo.com/');
  
    // Input in Elememnt by Tape Using ID Selector 
    await page.locator('#user-name').type('standard_user',{delay:150});
   
    // Input in Elememnt by fill 
    await page.locator('#password').fill('secret_sauce');
 
    // Click login Button 
    await page.locator('[id="login-button"]').click();
    await page.pause();
    

  });