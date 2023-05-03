import { test, expect, chromium } from '@playwright/test';

test(' Recored video + slow motion  ', async ({ page }) => {

   const browser = await chromium.launch({
      slowMo: 500,
      headless: false

   });

   const context = await browser.newContext({
      recordVideo: {
         dir: 'videos/',
         size: { width: 800, height: 600 }
      }
   });

   const page = context.newPage();

   await page.goto('https://www.saucedemo.com/');
   await page.locator('#user-name').type('standard_user', { delay: 150 });
   await page.locator('#password').fill('secret_sauce');
   await page.locator('[id="login-button"]').click();
   await expect(page.locator('.title')).toContainText('Products');



   // make sure you claose the context 
   await context.close();

});