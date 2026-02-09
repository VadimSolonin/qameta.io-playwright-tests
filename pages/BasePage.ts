import { expect, type Locator, type Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async assertTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    async assertUrl(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    async assertText(locator: Locator, text: string) {
        await expect(locator).toHaveText(text);
    }

    async assertVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }
}
