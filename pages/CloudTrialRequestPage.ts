import { test, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CloudTrialRequestPage extends BasePage { 
    readonly cloudTrialPageTitle: Locator;

    constructor(page: Page){
        super(page);
        this.cloudTrialPageTitle = page.locator('#cloud_free');
    }

    public async assertCloudTrialTextTitle(text: string){
        await test.step(`Проверить заголовок страницы Cloud Trial: ${text}`, async () => {
            await this.assertText(this.cloudTrialPageTitle, text);
        });
    }
}