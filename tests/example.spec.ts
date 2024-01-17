import { test, expect, type Page } from '@playwright/test';

let page: Page;

//TODO: to be later replaced with a generic smoke test
test.beforeAll(async ({browser}) => {
  page = await browser.newPage();
  
  await page.goto('https://dashboard.sandbox.checkout.com/');
  await page.getByLabel('Email').fill('compass-admin.sbox-auto@b7ocprkt.mailosaur.net');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Password').fill('Not4ManualUse!');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
});

test('sample test', async ({ }) => {
//TODO: write an example test
});

test.afterAll(async () => {
  await page.close();
});