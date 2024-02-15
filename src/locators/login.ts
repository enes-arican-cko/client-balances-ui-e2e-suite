import { Locator, Page } from "@playwright/test";

export class LoginPageLocators {

    readonly username: Locator;
    readonly password: Locator;
    readonly continueBtn: Locator;
    readonly cookiesBtn: Locator;

    constructor(page: Page) {
        this.username = page.getByLabel('Email');
        this.password = page.getByLabel('Password');
        this.continueBtn = page.getByRole('button', { name: 'Continue' });
        this.cookiesBtn = page.getByRole('button', { name: 'Accept All Cookies' });
    }
}