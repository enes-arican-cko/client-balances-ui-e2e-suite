import config from '../../../../playwright.config';
import { logger } from '../../../../src/config/logger';
import test, { page } from "../../../../src/fixtures/commonFixtures";
import { LoginPage } from '../../../../src/pages/common/login';
import { NewReportPage, ReportType } from '../../../../src/pages/reports/newReport';
import { addCustomAnnotation } from '../../utils/index';

const tags = '@functional @reports'

test.describe(tags, () => {
  test.beforeAll("🔐 Login to the Dashboard", async ({ dashboardPage }, testInfo) => {
    addCustomAnnotation('🌍 Env', config.env)
    logger.info(`🏃 ${(config.env).toUpperCase()} | RUNNING: "${testInfo.title}" test\n`);
    const loginPage = new LoginPage(dashboardPage.page);
    await loginPage.loginViaForm()
  });

  test('Create a successfull payments report', async ({ }) => {
    const newReportPage = new NewReportPage(page);
    await newReportPage.validateCriticalComponents();
    await newReportPage.generateReport(ReportType.PAYMENTS);
    
    addCustomAnnotation('📂 Report Status', 'Generated')
  });

  test.afterAll(async ({ browser }) => {
    await browser.close();
    
    addCustomAnnotation('⚙️ Teardown', 'Browser closed')
  });
})