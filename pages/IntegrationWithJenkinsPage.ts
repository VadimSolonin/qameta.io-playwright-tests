import { expect, type Locator, Page } from '@playwright/test';

export class IntegrationWithJenkinsPage { 
    readonly page: Page;
    readonly jenkinsIntegrationPageTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.jenkinsIntegrationPageTitle = page.locator('#integration-with-jenkins');
    }

    public async verifyCloudTrialTextTitle (locator: Locator, text: string){
        await expect(locator).toHaveText(text)
    }
}