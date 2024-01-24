import config from '../../../playwright.config';
import { logger } from '../../../src/config/logger'
import test, { page } from "../../../src/fixtures/commonFixtures";
import { LoginPage } from '../../../src/pages/common/loginPage';
import { AllReportsPage } from '../../../src/pages/reports/reportsPage';

test.describe("@smoke @home", () => {
  test.beforeAll("🔐 Login to the Dashboard", async ({ dashboardPage }, testInfo) => {
    logger.info(`🏃 ${(config.env).toUpperCase()} | RUNNING: "${testInfo.title}" test\n`);
    const loginPage = new LoginPage(dashboardPage.page);
    await loginPage.loginViaForm()
  });
  
  test('Validate basic homepage components', async ({ }) => {
    logger.info(`✅ Validating all the critical elements on the "All reports" page`);
  
    const allReportsPage = new AllReportsPage(page);
    await allReportsPage.validatePresenceOfAllLocators()
  
  });
  
  test.afterAll(async ({ browser }) => {
    await browser.close();
  });

})

