import config from '../../../playwright.config';
import { logger } from '../../../src/config/logger'
import test, { page } from "../../../src/fixtures/commonFixtures";
import { HomePage } from '../../../src/pages/common/home';
import { LoginPage } from '../../../src/pages/common/login';
import { addCustomAnnotation } from '../index'

const tags = '@smoke @home'

test.describe(tags, () => {
  test.beforeAll("🔐 Login to the Dashboard", async ({ dashboardPage }, testInfo) => {
    addCustomAnnotation('🌍 Env', config.env)
    logger.info(`🏃 ${(config.env).toUpperCase()} | RUNNING: "${testInfo.title}" test\n`);
    const loginPage = new LoginPage(dashboardPage.page);
    await loginPage.loginViaForm()
  });
  
  test('Validate critical homepage components', async ({ }) => {  
    const homePage = new HomePage(page);
    await homePage.validateCriticalComponents()
  });
  
  test.afterAll(async ({ browser }) => {
    await browser.close();

    addCustomAnnotation('⚙️ Teardown', 'Browser closed')
  });
})