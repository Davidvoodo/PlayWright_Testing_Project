const { test, expect } = require('@playwright/test');

test('Test 1 Example', async ({ page }) => {

    // Go to Wesite 
    await page.goto('https://playwright.dev/');
  
    // Save the Title of the Elememnt 
    const h1Element = page.locator('[class="hero__title heroTitle_ohkl"]') ; 

    // Compare the Text to the Element title that we got from web page .
    await expect(h1Element).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');

    //Wait 3 seconds 
    await page.waitForTimeout(3000); 
    

  });
  
 
  
  