const { test, expect } = require('@playwright/test');
import { LoginPage } from '../Pages/login'


test.describe('Login Feature', () => {


    test.beforeEach(async ({ page }) => {
        const Login = new LoginPage(page)

        // Go to Wesite 
        Login.goToLoginPageURL();


    })

    test.afterAll(async ({ page }, testinfo) => {
        const Login = new LoginPage(page)

        //await page.waitForTimeout(3000);
        await page.close();
        //await page.screenshot({path:`screenshot/${testinfo.title}_${testinfo.status}.jpg`,fullPage :true});
    })




    test('Test 1 - Login', async ({ page }) => {
        const Login = new LoginPage(page)

        //Enter user name and Password and click login .
        Login.fullLogin('standard_user', 'secret_sauce')

        //After Login Check Title 
        await expect(page.locator('.title')).toContainText('Products');






    });

    test('Test 2 - Not Able to Login with locked_out_user', async ({ page }) => {
        const Login = new LoginPage(page)

        //Enter user name and Password and click login .
        Login.fullLogin('locked_out_user', 'secret_sauce')


        //After Try to Login Error Message
        await expect(page.locator('[class="error-message-container error"] h3'))
            .toContainText('Epic sadface: Sorry, this user has been locked out.');


    });

    test('Test 3 - Logout', async ({ page }) => {
        const Login = new LoginPage(page)

        //Enter user name and Password and click login .
        Login.fullLogin('standard_user', 'secret_sauce')

        //Logout
        await page.locator('[id="react-burger-menu-btn"]').click();
        await page.locator('[id="logout_sidebar_link"]').click();
        // await  page.getByRole('button', { name: 'Open Menu' }).click();
        //await page.getByRole('link', { name: 'Logout' }).click();

        //Login.fullLogOut();

    });


})

