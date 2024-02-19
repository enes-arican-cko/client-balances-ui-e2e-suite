import { Page } from "@playwright/test";
import config from "../../../playwright.config";
import { logger } from "../../config/logger";
import { LoginPageLocators } from "../../locators/login";
import { DashboardPage } from "../dashboard";

export class LoginPage extends DashboardPage {
    
    private loginPageLocator: LoginPageLocators;

    constructor(page: Page) {
        super(page)
        this.loginPageLocator = new LoginPageLocators(page);
        this.page.goto(config.baseUrl);
    }

    async populateLoginForm() {
        await this.usernameLocator.clear();
        await this.usernameLocator.fill(`${config.login.username}`);
        await this.continueBtnLocator.dispatchEvent('click');
        await this.passwordLocator.fill(`${config.login.password}`);

    }

    async loginViaForm() {
        await this.populateLoginForm();
        await this.loginPageLocator.continueBtn.click();
        logger.info(`🎊 Logged in successfully`)
        await this.page.waitForLoadState('domcontentloaded');

    }

    //TODO: Implement login via okta
}