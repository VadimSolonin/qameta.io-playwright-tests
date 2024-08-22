import { type Locator, Page } from '@playwright/test';

export class QametaIoMainPage { 
    readonly page: Page;
    readonly featuresNavLink: Locator;
    readonly freeTrialButton: Locator;
    readonly sandboxButton: Locator;

    constructor(page: Page){
        this.page = page;
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