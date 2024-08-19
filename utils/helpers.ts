import { Locator, Page, expect } from '@playwright/test';

export default class Helpers {
    public static async verifyPageTitle(page: Page, title: string){
        await expect(page).toHaveTitle(title);
    }

    public static async verifyPageUrl(page: Page, url: string){
        await expect(page).toHaveURL(url);
    }

    public static async verifyPageText(locator: Locator, text: string){
        await expect(locator).toHaveText(text)
    }

    public static async verifyLocatorVisibility(locator: Locator){
        await expect(locator).toBeVisible();
    }
}