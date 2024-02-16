import test, { page } from '../../../src/fixtures/commonFixtures';
import { AllReportsPage } from '../../../src/pages/reports/reports';
import { runPreTestSetup, runPostTestTeardown } from '../utils/test-setup';

const tags = '@smoke @reports'

test.describe(tags, () => {
  runPreTestSetup();

  test('Validate critical report page components', async ({ }) => {
    const allReportsPage = new AllReportsPage(page);
    await allReportsPage.validateCriticalComponents();
  });

  runPostTestTeardown();
})