import { Locator, Page, expect } from "@playwright/test";
import { DashboardPage } from "../dashboard";
import { DashboardPages } from "../common/pages";

export class HomePage extends DashboardPage {
    readonly accountSelectorLocator: Locator;
    readonly navIconSupportLocator: Locator;
    readonly navIconUserMenuLocator: Locator;
    readonly navLinkHomeLocator: Locator;
    readonly navLinkPaymentsLocator: Locator;
    readonly navLinkReportsLocator: Locator;
    readonly navLinkAnalyticsLocator: Locator;
    readonly navLinkFraudDetectionLocator: Locator;
    readonly navLinkSubEntitiesLocator: Locator;
    readonly navLinkCardIssuingLocator: Locator;
    readonly navLinkFundsLocator: Locator;
    readonly navLinkTeamLocator: Locator;
    readonly navLinkDevelopersLocator: Locator;
    readonly headerDashboardOverviewLocator: Locator;
    readonly currencySelectorLocator: Locator;
    readonly calendarInputLocator: Locator;
    readonly revenueInsightTileLocator: Locator;
    readonly capturesInsightTileLocator: Locator;
    readonly refundsInsightTileLocator: Locator;
    readonly disputeInsightTileLocator: Locator;
    readonly revenueInsightChartLocator: Locator;

    constructor(page: Page) {
        super(page, DashboardPages.HOME);
        this.accountSelectorLocator = this.page.getByTestId('account-selector-button');
        this.navIconSupportLocator = this.page.getByTestId('nav-icon-support');
        this.navIconUserMenuLocator = this.page.getByTestId('nav-icon-user-menu');

        /**
         * Top nav link locators
         */
        this.navLinkHomeLocator = this.page.getByRole('link', { name: 'Home' });
        this.navLinkPaymentsLocator = this.page.getByRole('link', { name: 'Payments' });
        this.navLinkReportsLocator = this.page.getByRole('link', { name: 'Reports' });
        this.navLinkAnalyticsLocator = this.page.getByRole('link', { name: 'Analytics' });
        this.navLinkFraudDetectionLocator = this.page.getByRole('link', { name: 'Fraud detection' });
        this.navLinkSubEntitiesLocator = this.page.getByRole('link', { name: 'Sub-entities' });
        this.navLinkCardIssuingLocator = this.page.getByRole('link', { name: 'Card issuing' });
        this.navLinkFundsLocator = this.page.getByRole('link', { name: 'Funds' });
        this.navLinkTeamLocator = this.page.getByRole('link', { name: 'Team' });
        this.navLinkDevelopersLocator = this.page.getByRole('link', { name: 'Developers' });
        this.headerDashboardOverviewLocator = this.page.getByRole('heading', { name: 'Dashboard overview' });
        this.currencySelectorLocator = this.page.getByTestId('currency-selector-button');
        this.calendarInputLocator = this.page.getByTestId('calendar-input');
        this.revenueInsightTileLocator = this.page.getByTestId('insight-tile-Revenue');
        this.capturesInsightTileLocator = this.page.getByTestId('insight-tile-Captures-by-payment-method');
        this.refundsInsightTileLocator = this.page.getByTestId('insight-tile-Refunds');
        this.disputeInsightTileLocator = this.page.getByTestId('insight-tile-Disputes-by-card-country');
        this.revenueInsightChartLocator = this.page.getByTestId('insights-revenue');
    }

    async validateComponents() {
        super.validateComponents(DashboardPages.HOME);

        await expect(this.accountSelectorLocator).toBeVisible();
        await expect(this.navIconSupportLocator).toBeVisible();
        await expect(this.navIconUserMenuLocator).toBeVisible();
        await expect(this.navLinkHomeLocator).toBeVisible();
        await expect(this.navLinkPaymentsLocator).toBeVisible();
        await expect(this.navLinkReportsLocator).toBeVisible();
        await expect(this.navLinkAnalyticsLocator).toBeVisible();
        await expect(this.navLinkFraudDetectionLocator).toBeVisible();
        await expect(this.navLinkSubEntitiesLocator).toBeVisible();
        await expect(this.navLinkCardIssuingLocator).toBeVisible();
        await expect(this.navLinkFundsLocator).toBeVisible();
        await expect(this.navLinkTeamLocator).toBeVisible();
        await expect(this.navLinkDevelopersLocator).toBeVisible();
        await expect(this.headerDashboardOverviewLocator).toBeVisible();
        await expect(this.currencySelectorLocator).toBeVisible();
        await expect(this.calendarInputLocator).toBeVisible();
        await expect(this.revenueInsightTileLocator).toBeVisible();
        await expect(this.capturesInsightTileLocator).toBeVisible();
        await expect(this.refundsInsightTileLocator).toBeVisible();
        await expect(this.disputeInsightTileLocator).toBeVisible();
        await expect(this.revenueInsightChartLocator).toBeVisible();
    }
}