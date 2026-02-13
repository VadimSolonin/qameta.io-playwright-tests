import { test, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class QametaIoMainPage extends BasePage { 
    readonly featuresNavLink: Locator;
    readonly freeTrialButton: Locator;
    readonly sandboxButton: Locator;

    constructor(page: Page){
        super(page);
        this.featuresNavLink = page.locator("#features_nav_desctop");
        this.freeTrialButton = page.locator("#free_trial_pricing");
        this.sandboxButton = page.locator('#sandbox');
    }

    async hoverFeaturesNavLink(){
        await test.step('Навести курсор на пункт меню Features', async () => {
            await this.featuresNavLink.hover();
        });
    }

    async clickFeaturesNavLink(text : string){
        await test.step(`Кликнуть по пункту меню Features: ${text}`, async () => {
            await this.page.locator('#features_nav_desctop :text(" ' + text + '")').click();
        });
    }
    
    async clickFreeTrialButton(){
        await test.step('Нажать кнопку Free Trial', async () => {
            await this.freeTrialButton.click();
        });
    }
    
    async clickSandboxButton(){
        await test.step('Нажать кнопку Sandbox', async () => {
            await this.sandboxButton.click();
        });
    }
}