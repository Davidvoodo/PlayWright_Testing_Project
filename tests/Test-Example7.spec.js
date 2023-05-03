const { test, expect } = require('@playwright/test');

test('Test 7 Example', async ({ page }) => {

    // Go to Wesite 
    await page.goto('https://demo.applitools.com/');
    //await page.pause();
    await page.locator('[id="username"]').fill('David');
    await page.locator('[id="password"]').fill('1234'); 

    await page.waitForSelector('[id="log-in"]',{timeout :4000});
    await expect (page.locator('[id="log-in"]')).toHaveCount(1);
    await page.locator('[id="log-in"]').click(); 

    

    //Wait 3 seconds 
    await page.waitForTimeout(3000); 
    

  });
  