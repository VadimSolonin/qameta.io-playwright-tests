import { test, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class IntegrationWithJenkinsPage extends BasePage { 
    readonly jenkinsIntegrationTitle: Locator;

    constructor(page: Page){
        super(page);
        this.jenkinsIntegrationTitle = page.locator('#integration-with-jenkins');
    }

    public async assertJenkinsIntegrationTextTitle(text: string){
        await test.step(`Проверить заголовок страницы Integration with Jenkins: ${text}`, async () => {
            await this.assertText(this.jenkinsIntegrationTitle, text);
        });
    }
}