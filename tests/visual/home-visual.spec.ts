import { expect } from '@playwright/test';
import config from '../../playwright.config';
import { logger } from '../../src/config/logger'
import test, { page } from "../../src/fixtures/commonFixtures";
import { HomePage } from '../../src/pages/common/home';
import { LoginPage } from '../../src/pages/common/login';
import { DashboardPages } from '../../src/pages/dashboard';

test.describe("@visual @home", () => {
  test.beforeAll("🔐 Login to the Dashboard", async ({ dashboardPage }, testInfo) => {
    logger.info(`🏃 ${(config.env).toUpperCase()} | RUNNING: "${testInfo.title}" test\n`);
    const loginPage = new LoginPage(dashboardPage.page);
    await loginPage.loginViaForm()
  });
  
  test(`Performing pixel level visual comparison on ${DashboardPages.HOME}`, async ({ }) => {  
    const homePage = new HomePage(page);
    expect(await homePage.page.screenshot({fullPage: true})).toMatchSnapshot('home.png')
  });

  test.afterAll(async ({ browser }) => {
    await browser.close();
  });

})