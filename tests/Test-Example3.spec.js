const { test, expect } = require('@playwright/test');

test('Test 3 Example', async ({ page }) => {

    // Go to Wesite 
    await page.goto('https://www.saucedemo.com/');

    // Input in Elememnt by Tape
    await page.locator('#user-name').type('standard_user', { delay: 150 });

    // Input in Elememnt by fill 
    await page.locator('#password').fill('secret_sauce');

    // Click login Button 
    await page.locator('[id="login-button"]').click();

    //After Login Check Title 
    await expect(page.locator('.title')).toContainText('Products');

    //Select Dropdown (by Name\Label\Index)
    const DropdownElemenmt = page.locator('.product_sort_container');
    await DropdownElemenmt.selectOption({ label: 'Price (high to low)' });
    await page.waitForTimeout(3000);
    await DropdownElemenmt.selectOption({ value: 'lohi' });
    await page.waitForTimeout(3000);
    await DropdownElemenmt.selectOption({ index: 1 });

});