import { Page, expect } from "@playwright/test";
import { HomePageLocators } from "../../locators/home";
import { DashboardPages } from "./pages";
import { DashboardPage } from "../dashboard";
import { time } from "console";

export class HomePage extends DashboardPage {

    private homePageLocators: HomePageLocators;

    constructor(page: Page) {
        super(page, DashboardPages.HOME);
        this.homePageLocators = new HomePageLocators(page);
    }

    async validateComponents() {
        super.validateComponents(DashboardPages.HOME);

        await expect(this.homePageLocators.accountSelector).toBeVisible({timeout:10000});
        await expect(this.homePageLocators.navIconSupport).toBeVisible();
        await expect(this.homePageLocators.navIconUserMenu).toBeVisible();
        await expect(this.homePageLocators.navLinkHome).toBeVisible();
        await expect(this.homePageLocators.navLinkPayments).toBeVisible();
        await expect(this.homePageLocators.navLinkReports).toBeVisible();
        await expect(this.homePageLocators.navLinkAnalytics).toBeVisible();
        await expect(this.homePageLocators.navLinkFraudDetection).toBeVisible();
        await expect(this.homePageLocators.navLinkSubEntities).toBeVisible();
        await expect(this.homePageLocators.navLinkCardIssuing).toBeVisible();
        await expect(this.homePageLocators.navLinkFunds).toBeVisible();
        await expect(this.homePageLocators.navLinkTeam).toBeVisible();
        await expect(this.homePageLocators.navLinkDevelopers).toBeVisible();
        await expect(this.homePageLocators.headerDashboardOverview).toBeVisible();
        await expect(this.homePageLocators.currencySelector).toBeVisible();
        await expect(this.homePageLocators.calendarInput).toBeVisible();
        await expect(this.homePageLocators.revenueInsightTile).toBeVisible();
        await expect(this.homePageLocators.capturesInsightTile).toBeVisible();
        await expect(this.homePageLocators.refundsInsightTile).toBeVisible();
        await expect(this.homePageLocators.disputeInsightTile).toBeVisible();
        await expect(this.homePageLocators.revenueInsightChart).toBeVisible();
    }
}