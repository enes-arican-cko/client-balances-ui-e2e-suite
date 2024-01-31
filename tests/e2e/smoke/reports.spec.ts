import config from '../../../playwright.config';
import { logger } from '../../../src/config/logger';
import test, { page } from '../../../src/fixtures/commonFixtures';
import { LoginPage } from '../../../src/pages/common/login';
import { AllReportsPage } from '../../../src/pages/reports/reports';
import { addCustomAnnotation } from '../index';

const tags = '@smoke @reports'

test.describe(tags, () => {
  test.beforeAll("🔐 Login to the Dashboard", async ({ dashboardPage }, testInfo) => {
    addCustomAnnotation('🌍 Env', config.env)
    logger.info(`🏃 ${(config.env).toUpperCase()} | RUNNING: "${testInfo.title}" test\n`);
    const loginPage = new LoginPage(dashboardPage.page);
    await loginPage.loginViaForm()
  });

  test('Validate critical report page components', async ({ }) => {
    const allReportsPage = new AllReportsPage(page);
    await allReportsPage.validateCriticalComponents();
  });

  test.afterAll(async ({ browser }) => {
    await browser.close();
    
    addCustomAnnotation('⚙️ Teardown', 'Browser closed')
  });
})