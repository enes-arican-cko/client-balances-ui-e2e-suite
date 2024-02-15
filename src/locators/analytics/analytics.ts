import { Locator, Page } from "@playwright/test";
import { DashboardPages } from "../../pages/common/pages";

export class AnalyticsPageLocators {

    readonly calendarInput: Locator;
    readonly headerDataExplorer: Locator;
    readonly chartBuilderTab: Locator;
    readonly codeViewerTab: Locator;
    
    // "Chart data" section
    readonly headerChartData: Locator;
    readonly dataTypeDropdown: Locator;
    readonly groupByBtn: Locator;
   
    // "Filter results" section
    readonly headerFilterResults: Locator;
    readonly filterDropdown: Locator;
  
    // "Chart type" section
    readonly headerChartType: Locator;
    readonly chartTypeNumberTab: Locator;
    readonly chartTypeLineChartTab: Locator;
    readonly chartTypeBarChartTab: Locator;
    readonly chartTypeDonutChartTab: Locator;
    readonly exportBtn: Locator;
    readonly saveBtn: Locator;
    readonly previewWidget: Locator;

    constructor(page: Page) {
        this.calendarInput = page.getByTestId('calendar-input');
        this.headerDataExplorer = page.getByRole('heading', { name: DashboardPages.DATA_EXPLORER });
        this.chartBuilderTab = page.getByRole('tab', { name: 'Chart builder' });
        this.codeViewerTab = page.getByRole('tab', { name: 'Code viewer' });
        this.headerChartData = page.getByRole('heading', { name: 'Chart data' });
        this.dataTypeDropdown = page.locator('button').filter({ hasText: 'Authorized count' }); 
        this.groupByBtn = page.getByRole('button', { name: 'Group by' });
        this.headerFilterResults = page.getByRole('heading', { name: 'Filter results' });
        this.filterDropdown = page.getByTestId('filter-row').getByLabel('open menu');
        this.headerChartType = page.getByRole('heading', { name: 'Chart type' });
        this.chartTypeNumberTab = page.getByTestId('app-body').getByText('Number');
        this.chartTypeLineChartTab = page.getByTestId('app-body').getByText('Line chart');
        this.chartTypeBarChartTab = page.getByTestId('app-body').getByText('Bar chart');
        this.chartTypeDonutChartTab = page.getByTestId('app-body').getByText('Donut chart');
        this.exportBtn = page.getByRole('button', { name: 'Export' });
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.previewWidget = page.getByTestId('preview-widget');
    }
}