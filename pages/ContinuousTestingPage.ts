import { type Locator, Page } from '@playwright/test';

export class ContinuousTestingPage { 
    readonly page: Page;
    readonly jenkinsIntegrationLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.jenkinsIntegrationLink = page.locator("#jenkins_integration");
    }

    public async clickJenkinsIntegrationLink (){
        await this.jenkinsIntegrationLink.click();
    }
}