import { test, expect, type Page } from '@playwright/test';
import config from '../playwright.config';
import { logger } from '../src/config/logger'

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();

  logger.info(`🚀 Launching tests in ${(config.env).toUpperCase()} env... \n`);

  await page.goto(config.baseUrl);
  await page.getByLabel('Email').fill(config.login.username);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Password').fill(config.login.password);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
});

test('Reporting: create a successfull payments report', async ({ }) => {
  await expect(page.getByRole('link', { name: 'Reports' })).toBeHidden();
  await page.getByRole('link', { name: 'Reports' }).click();
  logger.info(`✅ Navigating to the "Reports" page`);
  await expect(page.getByRole('button', { name: 'New report' })).toBeVisible();
  await page.getByRole('button', { name: 'New report' }).click();
  await page.getByRole('button', { name: 'Generate report', exact: true }).click();
  logger.info(`✅ Generating new report`);
  await expect(page.locator('tbody')).toContainText('Generating...');
});

test.afterAll(async () => {
  await page.close();
});