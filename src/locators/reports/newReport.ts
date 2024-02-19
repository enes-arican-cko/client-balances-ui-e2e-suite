import { Locator, Page } from "@playwright/test";

export class NewReportPageLocators {

    readonly headingText: Locator;
    readonly configureDetailsSection: Locator;
    readonly generateReportBtn: Locator;
    readonly reportType: Locator;
    readonly account: Locator;
    readonly generateNow: Locator;
    readonly generateSchedule: Locator;
    readonly calendarInput: Locator;
    readonly fileNameInput: Locator;
    readonly dataFreshnessNotification: Locator;
    readonly includedFieldsSection: Locator;
    readonly selectDefaultBtn: Locator;
    
    constructor(page: Page) {
        this.headingText = page.getByRole('heading', { name: 'New report' });
        this.configureDetailsSection = page.getByTestId('configure-details-section');
        this.generateReportBtn = page.getByRole('button', { name: 'Generate report', exact: true });
        this.reportType = page.locator('#report-type');
        this.account = page.locator('#account');
        this.generateNow = page.getByRole('button', { name: 'Generate report now' });
        this.generateSchedule = page.getByRole('button', { name: 'Generate over a schedule NEW' });
        this.calendarInput = page.getByTestId('calendar-input');
        this.fileNameInput = page.getByLabel('File name');
        this.dataFreshnessNotification = page.getByTestId('data-freshness-notification');
        this.includedFieldsSection = page.getByTestId('report-form-second-section');
        this.selectDefaultBtn = page.getByTestId('select-default');
    }
}