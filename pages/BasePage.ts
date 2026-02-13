import { expect, test, type Locator, type Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async assertTitle(title: string) {
        await test.step(`Проверить заголовок страницы: ${title}`, async () => {
            await expect(this.page).toHaveTitle(title);
        });
    }

    async assertUrl(url: string) {
        await test.step(`Проверить URL страницы: ${url}`, async () => {
            await expect(this.page).toHaveURL(url);
        });
    }

    async assertText(locator: Locator, text: string) {
        await test.step(`Проверить текст элемента: ${text}`, async () => {
            await expect(locator).toHaveText(text);
        });
    }

    async assertVisible(locator: Locator) {
        await test.step('Проверить, что элемент отображается', async () => {
            await expect(locator).toBeVisible();
        });
    }
}
