import config from '../../../../playwright.config';
import { logger } from '../../../../src/config/logger'
import test, { page } from "../../../../src/fixtures/commonFixtures";
import { LoginPage } from '../../../../src/pages/common/loginPage';
import { NewReportPage, ReportType } from '../../../../src/pages/reports/newReportPage';

test.describe("@functional @reports", () => {
  test.beforeAll("🔐 Login to the Dashboard", async ({ dashboardPage }, testInfo) => {
    logger.info(`🏃 ${(config.env).toUpperCase()} | RUNNING: "${testInfo.title}" test\n`);
    const loginPage = new LoginPage(dashboardPage.page);
    await loginPage.loginViaForm()
  });
  
  test('Create a successfull payments report', async ({ }) => {
    const newReportPage = new NewReportPage(page);
    await newReportPage.validatePresenceOfAllLocators();
    await newReportPage.generateReport(ReportType.PAYMENTS);
  });
  
  test.afterAll(async ({ browser }) => {
    await browser.close();
  });
})