import { addCustomAnnotation } from './tools';
import config from '../../../playwright.config';
import { logger } from '../../../src/config/logger';
import test from "../../../src/fixtures/commonFixtures";
import { LoginPage } from '../../../src/pages/common/login';

export function runPreTestSetup() {
  test.beforeAll("🔐 Login to the Dashboard", async ({ dashboardPage }, testInfo) => {
    addCustomAnnotation('🌍 Env', config.env)
    if (testInfo.retry) {
      logger.info(`\n 🔁 "Test: ${testInfo.title}" failed Retrying ... \n`);
    }

    logger.info(`🏃 ${(config.env).toUpperCase()} | RUNNING: "${testInfo.title}" test\n`);
    const loginPage = new LoginPage(dashboardPage.page);
    await loginPage.loginViaForm()
  });
}

export function runPostTestTeardown() {
  test.afterAll(async ({ browser }) => {
    await browser.close();
    addCustomAnnotation('⚙️ Teardown', 'Browser closed')
  });
}