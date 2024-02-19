import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../../config/logger';
import { DashboardPages } from '../common/pages';
import { LocatorType } from '../dashboard';
import { AllReportsPage } from './allReports';
import { NewReportPageLocators } from '../../locators/reports/newReport';

export enum ReportType {
  PAYMENTS = "Payments",
  DISPUTES = "Disputes"
}

export class NewReportPage extends AllReportsPage {

  private newReportPageLocators: NewReportPageLocators;

  constructor(page: Page) {
    super(page)
    this.newReportPageLocators = new NewReportPageLocators(page);
    super.navigateTo(DashboardPages.NEW_REPORT, LocatorType.BUTTON);
  }

  async validateComponents() {
    logger.info(`✅ Validating UI components on the ${DashboardPages.NEW_REPORT} page`);

    await this.newReportPageLocators.headingText.focus()
    await expect.soft(this.newReportPageLocators.generateReportBtn).toBeVisible();
    await expect.soft(this.newReportPageLocators.headingText).toBeVisible();
    await expect.soft(this.newReportPageLocators.configureDetailsSection).toBeVisible();
    await expect.soft(this.newReportPageLocators.reportType).toBeVisible();
    await expect.soft(this.newReportPageLocators.account).toBeVisible();
    await expect.soft(this.newReportPageLocators.generateNow).toBeVisible();
    await expect.soft(this.newReportPageLocators.generateSchedule).toBeVisible();
    await expect.soft(this.newReportPageLocators.calendarInput).toBeVisible();
    await expect.soft(this.newReportPageLocators.fileNameInput).toBeVisible();
    await expect.soft(this.newReportPageLocators.dataFreshnessNotification).toBeVisible();
    await expect.soft(this.newReportPageLocators.includedFieldsSection).toBeVisible();
    expect.soft(this.newReportPageLocators.selectDefaultBtn).toBeDisabled;
  }

  async generateReport(reportType: ReportType) {
    logger.info(`✅ Creating new ${reportType} report`);

    //TODO: add logic to support multiple report type selections
    await this.newReportPageLocators.generateReportBtn.dispatchEvent('click');
  }
}
