import { expect, type Locator, type Page } from '@playwright/test';
import { DashboardPages } from '../common/pages';
import { ReportsPage } from './reports';

export class AllReportsPage extends ReportsPage {
  readonly newReportLinkLocator: Locator;
  readonly headerTextLocator: Locator;
  readonly reportsFilterLocator: Locator;
  readonly reportsTableRowLocator: Locator;
  readonly reportsTableFirstRowLocator: Locator;

  constructor(page: Page) {
    super(page, DashboardPages.REPORTS)
    this.newReportLinkLocator = this.page.getByRole('button', { name: 'New report' });
    this.headerTextLocator = this.page.getByRole('heading', { name: 'All reports' });
    this.reportsFilterLocator = this.page.getByTestId('reports-filter');
    this.reportsTableRowLocator = this.page.getByTestId('report-table-row');
    this.reportsTableFirstRowLocator = this.page.getByRole('cell', { name: 'Payments' }).first();
  }

  async validateComponents() {
    super.validateComponents(DashboardPages.ALL_REPORTS);
    await this.reportsFilterLocator.focus()

    await expect.soft(this.headerTextLocator).toBeVisible();
    await expect.soft(this.reportsFilterLocator).toBeVisible();
    await expect.soft(this.newReportLinkLocator).toBeVisible();
  }
}