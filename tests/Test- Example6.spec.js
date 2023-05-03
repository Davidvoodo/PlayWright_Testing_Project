import { test, expect } from '@playwright/test';

test('Demo Recored ', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
 
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce')

  await page.locator('[data-test="login-button"]').click();

  await page.pause(); 
 
  //const h1 = page.getByText('$29.99');
  
  await expect( page.getByText('$29.99')).toContainText('$29.99'); 
  //await expect(page.locator('[class="inventory_item_price"]')).toContainText('$29.99'); 

  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});