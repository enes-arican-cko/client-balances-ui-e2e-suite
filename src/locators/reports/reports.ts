import { Locator, Page } from "@playwright/test";

export class ReportsPageLocators {

    readonly newReportLink: Locator;
    readonly headerText: Locator;
    readonly reportsFilter: Locator;
    readonly reportsTableRow: Locator;
    readonly reportsTableFirstRow: Locator;

    constructor(page: Page) {
        this.newReportLink = page.getByRole('button', { name: 'New report' });
        this.headerText = page.getByRole('heading', { name: 'All reports' });
        this.reportsFilter = page.getByTestId('reports-filter');
        this.reportsTableRow = page.getByTestId('report-table-row');
        this.reportsTableFirstRow = page.getByRole('cell', { name: 'Payments' }).first();
    }
}