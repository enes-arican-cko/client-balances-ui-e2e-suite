import { addCustomAnnotation } from '../../utils/tools';
import test, { page } from "../../../../src/fixtures/commonFixtures";
import { runPreTestSetup, runPostTestTeardown } from '../../utils/test-setup';
import { NewReportPage, ReportType } from '../../../../src/pages/reports/newReport';

const tags = '@functional @reports'

test.describe(tags, () => {
  runPreTestSetup();

  test('Create a successfull payments report', async ({ }) => {
    const newReportPage = new NewReportPage(page);
    await newReportPage.validateCriticalComponents();
    await newReportPage.generateReport(ReportType.PAYMENTS);
    
    addCustomAnnotation('📂 Report Status', 'Generated')
  });

  runPostTestTeardown();
})