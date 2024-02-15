import { Page, expect } from "@playwright/test";
import { AnalyticsPageLocators } from "../../locators/analytics/analytics";
import { DashboardPages } from "../common/pages";
import { AnalyticsPage } from "./analytics";

export class DataExplorerPage extends AnalyticsPage {

  private analyticsPageLocators: AnalyticsPageLocators;

  constructor(page: Page) {
    super(page, DashboardPages.ANALYTICS);
    this.analyticsPageLocators = new AnalyticsPageLocators(page);
  }

  async validateComponents() {
    super.validateComponents(DashboardPages.DATA_EXPLORER);

    await expect(this.analyticsPageLocators.calendarInput).toBeVisible();
    await expect(this.analyticsPageLocators.headerDataExplorer).toBeVisible();
    await expect(this.analyticsPageLocators.chartBuilderTab).toBeVisible();
    await expect(this.analyticsPageLocators.codeViewerTab).toBeVisible();
    await expect(this.analyticsPageLocators.headerChartData).toBeVisible();
    await expect(this.analyticsPageLocators.dataTypeDropdown).toBeVisible();
    await expect(this.analyticsPageLocators.groupByBtn).toBeVisible();
    await expect(this.analyticsPageLocators.headerFilterResults).toBeVisible();
    await expect(this.analyticsPageLocators.filterDropdown).toBeVisible();
    await expect(this.analyticsPageLocators.headerChartType).toBeVisible();
    await expect(this.analyticsPageLocators.chartTypeNumberTab).toBeVisible();
    await expect(this.analyticsPageLocators.chartTypeLineChartTab).toBeVisible();
    await expect(this.analyticsPageLocators.chartTypeBarChartTab).toBeVisible();
    await expect(this.analyticsPageLocators.chartTypeDonutChartTab).toBeVisible();
    await expect(this.analyticsPageLocators.exportBtn).toBeVisible();
    await expect(this.analyticsPageLocators.saveBtn).toBeVisible();
    await expect(this.analyticsPageLocators.previewWidget).toBeVisible();
  }
}