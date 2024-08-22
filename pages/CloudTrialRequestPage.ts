import { type Locator, Page, expect } from '@playwright/test';

export class CloudTrialRequestPage { 
    readonly page: Page;
    readonly cloudTrialPageTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.cloudTrialPageTitle = page.locator("//h1['font-extrabold']");
    }

    public async verifyCloudTrialTextTitle (text: string){
        await expect(this.cloudTrialPageTitle).toHaveText(text)
    }
}