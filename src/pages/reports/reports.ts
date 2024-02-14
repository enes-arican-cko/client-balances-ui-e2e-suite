import { Page } from '@playwright/test';
import { DashboardPage, LocatorType } from '../dashboard';
import { DashboardPages } from '../common/pages';

export class ReportsPage extends DashboardPage {

    constructor(page: Page, pageType=DashboardPages.REPORTS) {
        super(page, pageType);
    }

    // navigate to sub-pages within reports
    async navigateTo(targetPage: DashboardPages, locator?: LocatorType) {
        await super.navigateTo(targetPage, locator);
    }

    async validateComponents(page=DashboardPages.ALL_REPORTS) {
        super.validateComponents(page);
      }

}