import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SandboxTestopsPage extends BasePage { 
    readonly inputEmail : Locator;

    constructor(page: Page){
        super(page);
        this.inputEmail = page.locator('[data-testid="input__email"]');
    }

    public async assertEmailInputVisible(){
        await this.assertVisible(this.inputEmail);
    }
}