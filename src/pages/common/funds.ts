import { Locator, Page, expect } from "@playwright/test";
import { DashboardPage, DashboardPages } from "../dashboard";

export class FundsPage extends DashboardPage {
    readonly BalancesSelectorLocator: Locator;


    constructor(page: Page) {
        super(page)
        super.navigateTo(DashboardPages.FUNDS);
        this.BalancesSelectorLocator = this.page.getByTestId('balances-selector-button');
        
        //this.navLinkHomeLocator = this.page.getByRole('link', { name: 'Home' });
        //this.navLinkTeamLocator = this.page.getByRole('link', { name: 'Team' });
    }

    async validateCriticalComponents() {
        super.validateCriticalComponents(DashboardPages.FUNDS);
        
        await expect(this.BalancesSelectorLocator).toBeVisible();
    }
}