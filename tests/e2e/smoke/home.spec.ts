import config from '../../../playwright.config';
import { logger } from '../../../src/config/logger'
import test, { page } from "../../../src/fixtures/commonFixtures";
import { HomePage } from '../../../src/pages/common/home';
import { LoginPage } from '../../../src/pages/common/login';
import { addCustomAnnotation } from '../utils/index'

const tags = '@smoke @home'

test.describe(tags, () => {
  test.beforeAll("🔐 Login to the Dashboard", async ({ dashboardPage }, testInfo) => {
    addCustomAnnotation('🌍 Env', config.env)
    if (testInfo.retry) {
      logger.info(`\n 🔁 "Test: ${testInfo.title}" failed Retrying ... \n`);
    }

    logger.info(`🏃 ${(config.env).toUpperCase()} | RUNNING: "${testInfo.title}" test\n`);
    const loginPage = new LoginPage(dashboardPage.page);
    await loginPage.loginViaForm()
  });
  
  test('Validate critical homepage components', async ({ }) => {  
    const homePage = new HomePage(page);
    await homePage.validateCriticalComponents()
  });
  
  test.afterAll(async ({ browser }) => {
    logger.info('🔚 Closing the browser');
    await browser.close();

    addCustomAnnotation('⚙️ Teardown', 'Browser closed')
  });
})