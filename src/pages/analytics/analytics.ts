import { Page } from '@playwright/test';
import { DashboardPage } from '../dashboard';
import { DashboardPages } from '../common/pages';

export class AnalyticsPage extends DashboardPage {

    constructor(page: Page, pageType = DashboardPages.ANALYTICS) {
        super(page, pageType);
    }

    // navigate to sub-pages within analytics
    async navigateTo(targetPage: DashboardPages) {
        await super.navigateTo(targetPage);
    }

    async validateComponents(page: DashboardPages) {
        super.validateComponents(page);
    }
}