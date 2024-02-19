import test, { page } from "../../../../src/fixtures/commonFixtures";
import { runPreTestSetup, runPostTestTeardown } from '../../utils/test-setup';
import { NewReportPage, ReportType } from '../../../../src/pages/reports/newReport';
import { addCustomAnnotation } from '../../index';

const tags = '@functional @reports'

test.describe(tags, () => {
  runPreTestSetup();

  test('Create a successful payments report', async ({ }) => {
    const newReportPage = new NewReportPage(page);
    await newReportPage.validateComponents();
    await newReportPage.generateReport(ReportType.PAYMENTS);
    addCustomAnnotation('📂 Report Status', 'Generated')
  });

  runPostTestTeardown();
})