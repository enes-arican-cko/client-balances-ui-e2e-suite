import { expect, type Page } from '@playwright/test';
import { DashboardPages } from '../common/pages';
import { ReportsPage } from './reports';
import { ReportsPageLocators } from '../../locators/reports/reports';

export class AllReportsPage extends ReportsPage {

  private reportsPageLocators: ReportsPageLocators;

  constructor(page: Page) {
    super(page, DashboardPages.REPORTS)
    this.reportsPageLocators = new ReportsPageLocators(page);
  }

  async validateComponents() {
    super.validateComponents(DashboardPages.ALL_REPORTS);
    await this.reportsPageLocators.reportsFilter.focus()
    await expect.soft(this.reportsPageLocators.headerText).toBeVisible();
    await expect.soft(this.reportsPageLocators.reportsFilter).toBeVisible();
    await expect.soft(this.reportsPageLocators.newReportLink).toBeVisible();
  }
}