import { type Locator, type Page } from '@playwright/test';
import { step } from '@decorators/allure';
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

    @step('Навести курсор на пункт меню Features')
    async hoverFeaturesNavLink(){
        await this.featuresNavLink.hover();
    }

    @step('Кликнуть по пункту меню Features: $')
    async clickFeaturesNavLink(text : string){
        await this.page.locator('#features_nav_desctop :text(" ' + text + '")').click();
    }
    
    @step('Нажать кнопку Free Trial')
    async clickFreeTrialButton(){
        await this.freeTrialButton.click();
    }
    
    @step('Нажать кнопку Sandbox')
    async clickSandboxButton(){
        await this.sandboxButton.click();
    }
}