// simple playwright program to launch browser and title validation
import{test, expect} from 'playwright/test';

test('Homepage',async ({page})=>{
await page.goto('https://demoblaze.com/');
const pageTitle=await page.title();
console.log('page title is',pageTitle);
await expect(page).toHaveTitle('STORE');
await expect(page).toHaveURL('https://demoblaze.com/')
//await page.pause();
await page.close();
})