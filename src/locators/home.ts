import { Locator, Page } from "@playwright/test";

export class HomePageLocators {

    readonly accountSelector: Locator;
    readonly navIconSupport: Locator;
    readonly navIconUserMenu: Locator;
    readonly navLinkHome: Locator;
    readonly navLinkPayments: Locator;
    readonly navLinkReports: Locator;
    readonly navLinkAnalytics: Locator;
    readonly navLinkFraudDetection: Locator;
    readonly navLinkSubEntities: Locator;
    readonly navLinkCardIssuing: Locator;
    readonly navLinkFunds: Locator;
    readonly navLinkTeam: Locator;
    readonly navLinkDevelopers: Locator;
    readonly headerDashboardOverview: Locator;
    readonly currencySelector: Locator;
    readonly calendarInput: Locator;
    readonly revenueInsightTile: Locator;
    readonly capturesInsightTile: Locator;
    readonly refundsInsightTile: Locator;
    readonly disputeInsightTile: Locator;
    readonly revenueInsightChart: Locator;

    constructor(page:Page) {
        this.accountSelector= page.getByTestId('account-selector-button');
        this.navIconSupport= page.getByTestId('nav-icon-support');
        this.navIconUserMenu= page.getByTestId('nav-icon-user-menu');
        this.navLinkHome= page.getByRole('link', { name: 'Home' });
        this.navLinkPayments= page.getByRole('link', { name: 'Payments' });
        this.navLinkReports= page.getByRole('link', { name: 'Reports' });
        this.navLinkAnalytics= page.getByRole('link', { name: 'Analytics' });
        this.navLinkFraudDetection= page.getByRole('link', { name: 'Fraud detection' });
        this.navLinkSubEntities= page.getByRole('link', { name: 'Sub-entities' });
        this.navLinkCardIssuing= page.getByRole('link', { name: 'Card issuing' });
        this.navLinkFunds= page.getByRole('link', { name: 'Funds' });
        this.navLinkTeam= page.getByRole('link', { name: 'Team' });
        this.navLinkDevelopers= page.getByRole('link', { name: 'Developers' });
        this.headerDashboardOverview= page.getByRole('heading', { name: 'Dashboard overview' });
        this.currencySelector= page.getByTestId('currency-selector-button');
        this.calendarInput= page.getByTestId('calendar-input');
        this.revenueInsightTile= page.getByTestId('insight-tile-Revenue');
        this.capturesInsightTile= page.getByTestId('insight-tile-Captures-by-payment-method');
        this.refundsInsightTile= page.getByTestId('insight-tile-Refunds');
        this.disputeInsightTile= page.getByTestId('insight-tile-Disputes-by-card-country');
        this.revenueInsightChart= page.getByTestId('insights-revenue');
    }
}