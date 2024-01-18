import config from '../../playwright.config';
import { logger } from '../../src/config/logger'
import test, { page } from "../../src/fixtures/commonFixtures";
import { LoginPage } from '../../src/pages/common/loginPage';
import { NewReportPage, ReportType } from '../../src/pages/reports/newReportPage';

test.beforeAll(async ({ dashboardPage }) => {
  logger.info(`🚀 Launching tests in ${(config.env).toUpperCase()} env... \n`);
  const loginPage = new LoginPage(dashboardPage.page);
  await loginPage.loginViaForm()
});

test('Reporting: Create a successfull payments report', async ({ }) => {
  const newReportPage = new NewReportPage(page);
  await newReportPage.validatePresenceOfAllLocators();
  await newReportPage.generateReport(ReportType.PAYMENTS);
});

test.afterAll(async ({ browser }) => {
  await browser.close();
});