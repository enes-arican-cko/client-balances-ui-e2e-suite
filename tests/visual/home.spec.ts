import { expect } from '@playwright/test';
import config from '../../playwright.config';
import { logger } from '../../src/config/logger';
import test, { page } from "../../src/fixtures/commonFixtures";
import { HomePage } from '../../src/pages/home/home';
import { LoginPage } from '../../src/pages/common/login';
import { DashboardPages } from '../../src/pages/common/pages';
import { addCustomAnnotation } from '..';

const tags = '@visual @home'

test.describe(tags, () => {
  test.beforeAll("🔐 Login to the Dashboard", async ({ dashboardPage }, testInfo) => {
    logger.info(`🏃 ${(config.env).toUpperCase()} | RUNNING: "${testInfo.title}" test\n`);
    const loginPage = new LoginPage(dashboardPage.page);
    await loginPage.loginViaForm()
  });

  test(`Visually compare ${DashboardPages.HOME} page components`, async ({ }) => {
    const homePage = new HomePage(page);
    logger.info(`Performing pixel comparison on ${DashboardPages.HOME} page components`)
    expect(await homePage.page.screenshot({ fullPage: true })).toMatchSnapshot('home.png')
  });

  test.afterAll(async ({ browser }) => {
    await browser.close();
    addCustomAnnotation('⚙️ Teardown', 'Browser closed');
  });
})