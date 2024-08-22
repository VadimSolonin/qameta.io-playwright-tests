import { type Locator, Page, expect } from '@playwright/test';

export class SandboxTestopsPage { 
    readonly page: Page;
    readonly inputEmail : Locator;

    constructor(page: Page){
        this.page = page;
        this.inputEmail = page.locator('[data-testid="input__email"]');
    }

    public async verifyEmailInputVisibility(){
        await expect(this.inputEmail).toBeVisible();
    }
}