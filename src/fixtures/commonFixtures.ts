import { Page, test as base } from '@playwright/test';
import { DashboardPage } from "../pages/dashboardPage";

// custom fixtures.
type CommonFixtures = {
    dashboardPage: DashboardPage;
};

export let page: Page;

// Extend basic test by providing a "todoPage" fixture.
const test = base.extend<CommonFixtures>({
    dashboardPage: async ({ browser }, use) => {
        page = await browser.newPage();
        const cookies = await setCookieValues();
        await page.context().addCookies(cookies);
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    }
});

/**
 * cookies to handle one trust cookie and consent pop-ups
 * while loading dashboard
 */
export async function setCookieValues() {
    const cookies = [
        { name: "OptanonConsent", value: "sIABGlobal=false&datestamp=Tue+Jan+23+2024+14%3A51%3A53+GMT%2B0000+(Greenwich+Mean+Time)&version=202309.1.0&consentId=898c74f2-4498-474c-b64e-751950375db4&interactionCount=2&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A0%2CC0003%3A0%2CC0004%3A0&hosts=H8%3A1%2CH71%3A1%2CH21%3A0%2CH90%3A0%2CH6%3A0%2CH66%3A0%2CH68%3A0%2CH88%3A0%2CH127%3A0%2CH91%3A0%2CH128%3A0%2CH123%3A0%2CH129%3A0%2CH28%3A0%2CH130%3A0%2CH7%3A0%2CH92%3A0%2CH97%3A0%2CH16%3A0%2CH98%3A0%2CH17%3A0%2CH99%3A0%2CH131%3A0%2CH132%3A0%2CH100%3A0%2CH101%3A0%2CH102%3A0%2CH23%3A0%2CH103%3A0&genVendors=V1%3A0%2C&geolocation=%3B&AwaitingReconsent=false", path: "/", domain: ".checkout.com" },
        { name: "OptanonAlertBoxClosed", value: "2023-05-24T09:54:16.194Z", path: "/", domain: ".checkout.com" }
    ]
    return cookies;
}

export default test;