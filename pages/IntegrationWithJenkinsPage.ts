import { expect, type Locator, Page } from '@playwright/test';

export class IntegrationWithJenkinsPage { 
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public async verifyJenkinsIntegrationTextTitle (page: Page, text: string){
        await expect(page.locator('#integration-with-jenkins')).toHaveText(text)
    }
}