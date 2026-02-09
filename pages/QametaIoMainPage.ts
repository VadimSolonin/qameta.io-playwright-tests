import { type Locator, type Page } from '@playwright/test';
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
        await this.featuresNavLink.hover();
    }

    async clickFeaturesNavLink(text : string){
        await this.page.locator('#features_nav_desctop :text(" ' + text + '")').click();
    }
    
    async clickFreeTrialButton(){
        await this.freeTrialButton.click();
    }
    
    async clickSandboxButton(){
        await this.sandboxButton.click();
    }
}