import { request } from 'http';

const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://qameta.io/');
});

test('Open continuous testing page', async ({ page }) => {
    await page.locator("#features_nav_desctop").hover()
    await page.locator('#features_nav_desctop :text("Continuous Testing")').click();
    await expect(page).toHaveTitle("Continuous testing with comprehensive CI/CD Integrations");
    await expect(page).toHaveURL("https://qameta.io/ci-integrations/");
});