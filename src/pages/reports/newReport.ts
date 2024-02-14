import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../../config/logger';
import { DashboardPages } from '../common/pages';
import { LocatorType } from '../dashboard';
import { AllReportsPage } from './allReports';

export enum ReportType {
  PAYMENTS = "Payments",
  DISPUTES = "Disputes"
}

export class NewReportPage extends AllReportsPage {
  readonly headingTextLocator: Locator;
  readonly configureDetailsSectionLocator: Locator;
  readonly generateReportBtnLocator: Locator;
  readonly reportTypeLocator: Locator;
  readonly accountLocator: Locator;
  readonly generateNowLocator: Locator;
  readonly generateScheduleLocator: Locator;
  readonly calendarInputLocator: Locator;
  readonly fileNameInputLocator: Locator;
  readonly dataFreshnessNotificationLocator: Locator;
  readonly includedFieldsSectionLocator: Locator;
  readonly selectDefaultBtnLocator: Locator;

  constructor(page: Page) {
    super(page)
    super.navigateTo(DashboardPages.NEW_REPORT, LocatorType.BUTTON);
    this.headingTextLocator = this.page.getByRole('heading', { name: 'New report' });
    this.configureDetailsSectionLocator = this.page.getByTestId('configure-details-section');
    this.generateReportBtnLocator = this.page.getByRole('button', { name: 'Generate report', exact: true });
    this.reportTypeLocator = this.page.locator('#report-type');
    this.accountLocator = this.page.locator('#account');
    this.generateNowLocator = this.page.getByRole('button', { name: 'Generate report now' });
    this.generateScheduleLocator = this.page.getByRole('button', { name: 'Generate over a schedule NEW' });
    this.calendarInputLocator = this.page.getByTestId('calendar-input');
    this.fileNameInputLocator = this.page.getByLabel('File name');
    this.dataFreshnessNotificationLocator = this.page.getByTestId('data-freshness-notification');
    this.includedFieldsSectionLocator = this.page.getByTestId('report-form-second-section');
    this.selectDefaultBtnLocator = this.page.getByTestId('select-default');
  }

  async validateComponents() {
    logger.info(`✅ Validating UI components on the ${DashboardPages.NEW_REPORT} page`);

    await this.headingTextLocator.focus()
    await expect.soft(this.generateReportBtnLocator).toBeVisible();
    await expect.soft(this.headingTextLocator).toBeVisible();
    await expect.soft(this.configureDetailsSectionLocator).toBeVisible();
    await expect.soft(this.reportTypeLocator).toBeVisible();
    await expect.soft(this.accountLocator).toBeVisible();
    await expect.soft(this.generateNowLocator).toBeVisible();
    await expect.soft(this.generateScheduleLocator).toBeVisible();
    await expect.soft(this.calendarInputLocator).toBeVisible();
    await expect.soft(this.fileNameInputLocator).toBeVisible();
    await expect.soft(this.dataFreshnessNotificationLocator).toBeVisible();
    await expect.soft(this.includedFieldsSectionLocator).toBeVisible();
    expect.soft(this.selectDefaultBtnLocator).toBeDisabled;
  }

  async generateReport(reportType: ReportType) {
    logger.info(`✅ Creating new ${reportType} report`);

    //TODO: enable the below code to support report type selection
    // await this.reportTypeLocator.click();
    // await this.page.selectOption("#report-type", reportType)
    // expect(this.reportTypeLocator).toBe(reportType);
    await this.generateReportBtnLocator.click()
  }
}
