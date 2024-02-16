import { Page } from "@playwright/test";
import { logger } from "../config/logger";

export enum DashboardPages {
    HOME = 'Home',
    REPORTS = 'Reports',
    NEW_REPORT = 'New report',
    MANAGE_SCHEDULES = 'Manage schedules',
    ANALYTICS = 'Analytics',
    FUNDS = 'Funds'
}

export enum LocatorType {
    "LINK" = "link",
    "BUTTON" = "button"
}

export class DashboardPage {
    private _page: Page

    constructor(page: Page) {
        this._page = page;
    }

    //getter for page
    get page(): Page {
        return this._page;
    }

    // navigate to diff supported pages within dashboard
    async navigateTo(targetPage: DashboardPages, locator = LocatorType.LINK) {
        logger.info(`👉 Navigating to the: "${targetPage}" page`)
        if (locator == LocatorType.BUTTON) {
            await this.page.getByRole("button", { name: `${targetPage}` }).click();
        } else {
            await this.page.getByRole("link", { name: `${targetPage}` }).click();
        }

        await this.page.waitForLoadState('domcontentloaded');
    }

    /**
     * @param page 
     */
    async validateCriticalComponents(page:DashboardPages) {
        logger.info(`✅ Validating critical components on the ${page} page`);
    }
}