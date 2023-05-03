const { test, expect } = require('@playwright/test');

//Annotation & Tags

test.skip('Test 1 ', async ({ page }) => {

    // Go to Wesite 
    await page.goto('https://playwright.dev/');

});

test('Test 2 ', async ({ page }) => {
    // await page.goto('https://playwright.dev/');
    test.fail();

});

test.fixme('Test 3 ', async ({ page }) => {

    // Go to Wesite 
    await page.goto('https://playwright.dev/');

});

test('Test 4 ', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    test.slow();

});


test('Test 5 ', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox', 'still working on it')
    await page.goto('https://playwright.dev/');

});


test('Test 6 @Smoke ', async ({ page }) => {
    await page.goto('https://playwright.dev/');

});

