import { Page } from "@playwright/test";
import { logger } from "../config/logger";
import { DashboardPages } from "./common/pages";

export const enum LocatorType {
    "LINK" = "link",
    "BUTTON" = "button"
}

export class DashboardPage {
    private _page: Page

    constructor(page: Page, pageType?: DashboardPages) {
        this._page = page;

        if (pageType) this.navigateTo(pageType);
    }

    //getter for page
    get page(): Page {
        return this._page;
    }

    // navigate to diff supported pages within dashboard
    async navigateTo(targetPage: DashboardPages, locatorType = LocatorType.LINK) {
        logger.info(`👉 Navigating to the: "${targetPage}" page`)
        if (locator == LocatorType.BUTTON) {
            await this.page.getByRole("button", { name: `${targetPage}` }).dispatchEvent('click');
        } else {
            await this.page.getByRole("link", { name: `${targetPage}` }).dispatchEvent('click');
        }

        await this.page.waitForLoadState('domcontentloaded');
    }

    /**
     * @param page 
     */
    async validateComponents(page: DashboardPages) {
        logger.info(`✅ Validating UI components on the ${page} page`);
    }
}