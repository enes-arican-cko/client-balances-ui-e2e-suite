import test, { page } from '../../../src/fixtures/commonFixtures';
import { AllReportsPage } from '../../../src/pages/reports/allReports';
import { runPreTestSetup, runPostTestTeardown } from '../utils/test-setup';

const tags = '@smoke @reports'

test.describe(tags, () => {
  runPreTestSetup();

  test('Validate reports page UI components', async ({ }) => {
    const reportsPage = new AllReportsPage(page);
    await reportsPage.validateComponents();
  });

  runPostTestTeardown();
})