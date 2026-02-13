import { expect, type Locator, type Page } from '@playwright/test';
import { step } from '@decorators/allure';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    @step('Проверить заголовок страницы: $')
    async assertTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    @step('Проверить URL страницы: $')
    async assertUrl(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    @step('Проверить текст элемента: $1')
    async assertText(locator: Locator, text: string) {
        await expect(locator).toHaveText(text);
    }

    @step('Проверить, что элемент отображается')
    async assertVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }
}
