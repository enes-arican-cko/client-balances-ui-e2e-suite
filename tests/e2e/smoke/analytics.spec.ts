import config from '../../../playwright.config';
import { logger } from '../../../src/config/logger';
import test, { page } from "../../../src/fixtures/commonFixtures";
import { DataExplorerPage } from '../../../src/pages/analytics/dataExplorer';
import { LoginPage } from '../../../src/pages/common/login';
import { addCustomAnnotation } from '../../index';

const tags = '@smoke @analytics'

test.describe(tags, () => {
  test.beforeAll("🔐 Login to the Dashboard", async ({ dashboardPage }, testInfo) => {
    addCustomAnnotation('🌍 Env', config.env);
    logger.info(`🏃 ${config.env} | RUNNING: "${testInfo.title}" test`);
    const loginPage = new LoginPage(dashboardPage.page);
    await loginPage.loginViaForm()
  });

  test('Validate Data explorer page UI components', async ({ }) => {
    const dataExplorerPage = new DataExplorerPage(page);
    await dataExplorerPage.validateComponents();
  });

  test.afterAll(async ({ browser }) => {
    await browser.close();
    addCustomAnnotation('⚙️ Teardown', 'Browser closed')
  });
})