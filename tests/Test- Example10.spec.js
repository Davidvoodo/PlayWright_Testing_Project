const { test, expect } = require('@playwright/test');

//Hooks and Group

test.describe('All My Tests', () => {


    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').type('standard_user', { delay: 150 });
        await page.locator('#password').fill('secret_sauce');
        await page.locator('[id="login-button"]').click();

    });

    test.afterAll(async ({ page }) => {

        await page.close();

    });

    test('add Products ', async ({ page }) => {

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();


    });

    test(' Logout ', async ({ page }) => {

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();

    });

})
