import { Locator, Page, expect } from "@playwright/test";
import config from "../../../playwright.config";
import { logger } from "../../config/logger";
import { DashboardPage } from "../dashboard";

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
        await this.usernameLocator.clear()
        await this.usernameLocator.fill(`${config.login.username}`)
        await this.continueBtnLocator.click()
        await this.passwordLocator.fill(`${config.login.password}`)

    }

    async loginViaForm() {
        await this.populateLoginForm();
        await this.continueBtnLocator.click()
        logger.info(`🎊 Logged in successfully`)
        await expect(this.page.getByTestId('account-selector-button')).toBeVisible({timeout: 10000});
        await this.page.waitForLoadState('domcontentloaded')
    }

    //TODO: Implement login via okta
}