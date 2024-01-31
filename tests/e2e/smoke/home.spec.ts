import { expect } from '@playwright/test';
import config from '../../../playwright.config';
import { logger } from '../../../src/config/logger'
import test, { page } from "../../../src/fixtures/commonFixtures";
import { HomePage } from '../../../src/pages/common/home';
import { LoginPage } from '../../../src/pages/common/login';
import { DashboardPages } from '../../../src/pages/dashboard';

test.describe("@smoke @home", () => {
  test.beforeAll("🔐 Login to the Dashboard", async ({ dashboardPage }, testInfo) => {
    logger.info(`🏃 ${(config.env).toUpperCase()} | RUNNING: "${testInfo.title}" test\n`);
    const loginPage = new LoginPage(dashboardPage.page);
    await loginPage.loginViaForm()
  });
  
  test('Validate basic homepage components', async ({ }) => {
    logger.info(`✅ Validating all the critical elements on the ${DashboardPages.HOME} page`);
  
    const homePage = new HomePage(page);
    await homePage.validatePresenceOfAllLocators()
  });
  
  test.afterAll(async ({ browser }) => {
    await browser.close();
  });

})