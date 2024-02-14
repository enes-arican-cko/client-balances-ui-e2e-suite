import { Page } from "@playwright/test";
import { AnalyticsPage } from "./analytics";
import { DashboardPages } from "../common/pages";

export class IntelligentAcceptancePage extends AnalyticsPage {

    constructor(page: Page) {
        super(page)
        super.navigateTo(DashboardPages.INTELLIGENT_ACCEPTANCE);
        //TODO: add locator variables
      }
    
      async validateComponents(page: DashboardPages) {
        super.validateComponents(page);
        //TODO: add validations here
      }
}