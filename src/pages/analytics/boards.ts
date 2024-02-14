import { Page } from "@playwright/test";
import { DashboardPages } from "../common/pages";
import { AnalyticsPage } from "./analytics";

export class BoardsPage extends AnalyticsPage {

  constructor(page: Page) {
    super(page)
    super.navigateTo(DashboardPages.BOARDS);
    //TODO: add locator variables
  }
  
  async validateComponents(page: DashboardPages) {
    super.validateComponents(page);
    //TODO: add validations here
  }
}