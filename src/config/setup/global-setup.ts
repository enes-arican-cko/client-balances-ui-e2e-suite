//TODO: WORK IN PRORESS
import { chromium } from '@playwright/test';
import config from '../../../playwright.config';
import { logger } from '../logger';

//TODO: enable this in near future as global option
async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(config.baseUrl);
  logger.info(`✅ Logging in via global setup`)

  const usernameLocator = page.getByLabel('Email');
  await usernameLocator.fill(`${config.login.username}`)
  const continueBtnLocator = page.getByRole('button', { name: 'Continue' });
  await continueBtnLocator.click();
  const pwdLocator = page.getByLabel('Password');
  await pwdLocator.fill(`${config.login.password}`)
  await continueBtnLocator.click();
  logger.info(`✅ Populating login form`)
  await page.context().storageState({ path: config.use?.storageState as string });
  await browser.close();
}

export default globalSetup;