import { test, expect } from '@playwright/test';

test('Assertions Demo', async ({ page }) => {

    // Go to Wesite 
    await page.goto('https://kitchen.applitools.com/');
    await page.pause();

    // Assertions : 
    //  1- Check if the Elememt present or not . 
    //await expect (page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);  
    const textHeader = page.getByRole('heading', { name: 'The Kitchen' });
    await expect(textHeader).toHaveCount(1);


    if (await page.$('heading', { name: 'The Kitchen' })) {
        await page.getByRole('heading', { name: 'The Kitchen' }).click();
    }


    //  2- Check if the Elememt is Hidden or Visible . 
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();


    //  3- Check if the Elememt is Enabled or Disabled . 
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();

    // 4- Check if the Elememt has value or not .
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen');
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('ABCD');

    // 5- check attribute value .
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class','chakra-heading css-dpmy2a') ; 
    // usuing regular expression 
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class',/.*css-dpmy2a/) ;

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/) ;
    
    // 6- to check the URL and Title 
    await expect (page).toHaveURL('https://kitchen.applitools.com/');
    await expect (page).toHaveTitle('The Kitchen') ; 

    // 7- Visual Validation with Screenshot .
    await expect (page).toHaveScreenshot() ; 
});