import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class IntegrationWithJenkinsPage extends BasePage { 
    readonly jenkinsIntegrationTitle: Locator;

    constructor(page: Page){
        super(page);
        this.jenkinsIntegrationTitle = page.locator('#integration-with-jenkins');
    }

    public async assertJenkinsIntegrationTextTitle(text: string){
        await this.assertText(this.jenkinsIntegrationTitle, text);
    }
}