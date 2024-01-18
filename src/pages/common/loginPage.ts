import { Locator, Page } from "@playwright/test";
import { DashboardPage } from "../dashboardPage";
import config from "../../../playwright.config";
import { logger } from "../../config/logger";

export class LoginPage extends DashboardPage {
    readonly usernameLocator: Locator;
    readonly passwordLocator: Locator;
    readonly continueBtnLocator: Locator;
    readonly cookiesBtnLocator: Locator;

    constructor(page: Page) {
        super(page)
        this.page.goto(config.baseUrl);
        this.usernameLocator = this.page.getByLabel('Email');
        this.passwordLocator = this.page.getByLabel('Password');
        this.continueBtnLocator = this.page.getByRole('button', { name: 'Continue' });
        this.cookiesBtnLocator = this.page.getByRole('button', { name: 'Accept All Cookies' });
    }

    async populateLoginForm() {
        logger.info(`✅ Populating the login form`)
        await this.usernameLocator.clear()
        await this.usernameLocator.fill(`${config.login.username}`)
        await this.continueBtnLocator.click()
        await this.passwordLocator.fill(`${config.login.password}`)

    }

    async loginViaForm() {
        await this.populateLoginForm();
        await this.continueBtnLocator.click()
        await this.cookiesBtnLocator.click()
        logger.info(`🎊 Logged in successfully`)
    }
}