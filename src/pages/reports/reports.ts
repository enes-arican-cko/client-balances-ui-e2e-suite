import { expect, type Locator, type Page } from '@playwright/test';
import { DashboardPage, DashboardPages } from '../dashboard'

export class AllReportsPage extends DashboardPage {
  readonly manageSchedulesLinkLocator: Locator;
  readonly newReportLinkLocator: Locator;
  readonly headerTextLocator: Locator;
  readonly reportsFilterLocator: Locator;
  readonly reportsTableRowLocator: Locator;
  readonly reportsTableFirstRowLocator: Locator;

  constructor(page: Page) {
    super(page)
    super.navigateTo(DashboardPages.REPORTS);
    this.manageSchedulesLinkLocator = this.page.getByRole('link', { name: 'Manage schedules' });
    this.newReportLinkLocator = this.page.getByRole('button', { name: 'New report' });
    this.headerTextLocator = this.page.getByRole('heading', { name: 'All reports' });
    this.reportsFilterLocator = this.page.getByTestId('reports-filter');
    this.reportsTableRowLocator = this.page.getByTestId('report-table-row');
    this.reportsTableFirstRowLocator = this.page.getByRole('cell', { name: 'Payments' }).first();
  }

  async validateCriticalComponents(page=DashboardPages.REPORTS) {
    super.validateCriticalComponents(page);
    await this.manageSchedulesLinkLocator.focus()
    
    await expect.soft(this.manageSchedulesLinkLocator).toBeVisible();
    await expect.soft(this.headerTextLocator).toBeVisible();
    await expect.soft(this.reportsFilterLocator).toBeVisible();
    await expect.soft(this.newReportLinkLocator).toBeVisible();
  }
}