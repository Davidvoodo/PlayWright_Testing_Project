const { test, expect } = require('@playwright/test');

test.describe('Login Feature', () => {

    test.beforeAll(async() => {
        //Executed before all tests

    });

    test.beforeEach(async({page}) => {
        await page.goto('https://www.saucedemo.com/');
    })

    test.afterEach(async({page},testinfo) =>{
        await page.waitForTimeout(3000);
        await page.screenshot({path:`screenshot/${testinfo.title}_${testinfo.status}.jpg`,fullPage :true});
    })

    // Test 1
    test('Login with standard_user', async ({ page }) => {
        await page.locator('#user-name').type('standard_user', { delay: 150 });
        await page.locator('#password').fill('secret_sauce');
        await page.locator('[id="login-button"]').click();
        await expect(page.locator('.title')).toContainText('Products');

    });
    // Test 2
    test('Login with locked_out_user', async ({ page }) => {
        await page.locator('#user-name').type('locked_out_user', { delay: 150 });
        await page.locator('#password').fill('secret_sauce');
        await page.locator('[id="login-button"]').click();
        await expect(page.locator('[class="error-message-container error"] h3'))
        .toContainText('Epic sadface: Sorry, this user has been locked out.');

    });
    //Test 3
    test('Login with missing password', async ({ page }) => {
        await page.locator('#user-name').type('standard_user', { delay: 150 });
        await page.locator('[id="login-button"]').click();
        await expect(page.locator('[class="error-message-container error"] h3'))
        .toContainText('Epic sadface: Password is required');

    });


})

