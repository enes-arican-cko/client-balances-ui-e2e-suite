import { Locator, Page, expect } from "@playwright/test";
import { AnalyticsPage } from "./analytics";
import { DashboardPages } from "../common/pages";

export class DataExplorerPage extends AnalyticsPage {

  readonly calendarInputLocator: Locator;
  readonly headerDataExplorerLocator: Locator;
  readonly chartBuilderTabLocator: Locator;
  readonly codeViewerTabLocator: Locator;
  
  // "Chart data" section
  readonly headerChartDataLocator: Locator;
  readonly dataTypeDropdownLocator: Locator;
  readonly groupByBtnLocator: Locator;
 
  // "Filter results" section
  readonly headerFilterResultsLocator: Locator;
  readonly filterDropdownLocator: Locator;

  // "Chart type" section
  readonly headerChartTypeLocator: Locator;
  readonly chartTypeNumberTabLocator: Locator;
  readonly chartTypeLineChartTabLocator: Locator;
  readonly chartTypeBarChartTabLocator: Locator;
  readonly chartTypeDonutChartTabLocator: Locator;
  readonly exportBtnLocator: Locator;
  readonly saveBtnLocator: Locator;
  readonly previewWidgetLocator: Locator;

  constructor(page: Page) {
    super(page, DashboardPages.ANALYTICS)
    this.calendarInputLocator = this.page.getByTestId('calendar-input');
    this.headerDataExplorerLocator = this.page.getByRole('heading', { name: DashboardPages.DATA_EXPLORER });
    this.chartBuilderTabLocator = this.page.getByRole('tab', { name: 'Chart builder' });
    this.codeViewerTabLocator = this.page.getByRole('tab', { name: 'Code viewer' });
    this.headerChartDataLocator = this.page.getByRole('heading', { name: 'Chart data' });
    this.dataTypeDropdownLocator = this.page.locator('button').filter({ hasText: 'Authorized count' }); 
    this.groupByBtnLocator = this.page.getByRole('button', { name: 'Group by' });
    this.headerFilterResultsLocator = this.page.getByRole('heading', { name: 'Filter results' });
    this.filterDropdownLocator = this.page.getByTestId('filter-row').getByLabel('open menu');
    this.headerChartTypeLocator = this.page.getByRole('heading', { name: 'Chart type' });
    this.chartTypeNumberTabLocator = this.page.getByTestId('app-body').getByText('Number');
    this.chartTypeLineChartTabLocator = this.page.getByTestId('app-body').getByText('Line chart');
    this.chartTypeBarChartTabLocator = this.page.getByTestId('app-body').getByText('Bar chart');
    this.chartTypeDonutChartTabLocator = this.page.getByTestId('app-body').getByText('Donut chart');
    this.exportBtnLocator = this.page.getByRole('button', { name: 'Export' });
    this.saveBtnLocator = this.page.getByRole('button', { name: 'Save' });
    this.previewWidgetLocator = this.page.getByTestId('preview-widget');
  }

  async validateComponents() {
    super.validateComponents(DashboardPages.DATA_EXPLORER);

    await expect(this.calendarInputLocator).toBeVisible();
    await expect(this.headerDataExplorerLocator).toBeVisible();
    await expect(this.chartBuilderTabLocator).toBeVisible();
    await expect(this.codeViewerTabLocator).toBeVisible();
    await expect(this.headerChartDataLocator).toBeVisible();
    await expect(this.dataTypeDropdownLocator).toBeVisible();
    await expect(this.groupByBtnLocator).toBeVisible();
    await expect(this.headerFilterResultsLocator).toBeVisible();
    await expect(this.filterDropdownLocator).toBeVisible();
    await expect(this.headerChartTypeLocator).toBeVisible();
    await expect(this.chartTypeNumberTabLocator).toBeVisible();
    await expect(this.chartTypeLineChartTabLocator).toBeVisible();
    await expect(this.chartTypeBarChartTabLocator).toBeVisible();
    await expect(this.chartTypeDonutChartTabLocator).toBeVisible();
    await expect(this.exportBtnLocator).toBeVisible();
    await expect(this.saveBtnLocator).toBeVisible();
    await expect(this.previewWidgetLocator).toBeVisible();
  }
}