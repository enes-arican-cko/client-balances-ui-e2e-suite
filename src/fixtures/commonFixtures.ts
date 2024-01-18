import { LoginPage } from "../pages/common/loginPage";
import { DashboardPage } from "../pages/dashboardPage";
import { AllReportsPage } from "../pages/reports/reportsPage";
import { Page, test as base } from '@playwright/test';

// custom fixtures.
type CommonFixtures = {
    dashboardPage: DashboardPage;
    loginPage: LoginPage;
    allReportsPage: AllReportsPage;
};

export let page: Page;

// Extend basic test by providing a "todoPage" fixture.
const test = base.extend<CommonFixtures>({
    dashboardPage: async ({ browser }, use) => {
        page = await browser.newPage();
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    }
});

export default test;