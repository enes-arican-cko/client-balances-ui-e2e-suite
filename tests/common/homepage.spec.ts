import config from '../../playwright.config';
import { logger } from '../../src/config/logger'
import test, { page } from "../../src/fixtures/commonFixtures";
import { LoginPage } from '../../src/pages/common/loginPage';
import { AllReportsPage } from '../../src/pages/reports/reportsPage';

test.beforeAll(async ({ dashboardPage }) => {
  logger.info(`🚀 Launching tests in ${(config.env).toUpperCase()} env... \n`);
  const loginPage = new LoginPage(dashboardPage.page);
  await loginPage.loginViaForm()
});

test('Sanity: Login and validate homepage components', async ({ }) => {
  const allReportsPage = new AllReportsPage(page);
  await allReportsPage.validatePresenceOfAllLocators()
  logger.info(`✅ Validating all the critical elements on the "All reports" page`);

});

test.afterAll(async ({ browser }) => {
  await browser.close();
});