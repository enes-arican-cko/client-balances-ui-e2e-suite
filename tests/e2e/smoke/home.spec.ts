import { HomePage } from '../../../src/pages/common/home';
import test, { page } from "../../../src/fixtures/commonFixtures";
import { runPreTestSetup, runPostTestTeardown } from '../utils/test-setup'

const tags = '@smoke @home'

test.describe(tags, () => {
  runPreTestSetup();
  
  test('Validate critical homepage components', async ({ }) => {  
    const homePage = new HomePage(page);
    await homePage.validateComponents()
  });
  
  runPostTestTeardown();
})