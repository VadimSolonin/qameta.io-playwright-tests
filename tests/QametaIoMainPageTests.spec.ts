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

test('Open cloud trial page', async ({ page }) => {
  await page.locator('#free_trial_pricing').click();
  await expect(page).toHaveTitle("Allure TestOps: Centralized Test Reporting");
  await expect(page).toHaveURL("https://qameta.io/cloud-trial-request/");
  let cloudTrialPageTitle = page.locator("//h1['font-extrabold']")
  await expect(cloudTrialPageTitle).toHaveText("Try out Allure TestOps Cloud free for 14 days to speed up your testing")
});

test('Open sandbox page', async ({ page }) => {
  await page.locator('#sandbox').click();
  await expect(page).toHaveTitle("Allure TestOps");
  let inputEmail = page.locator('[data-testid="input__email"]')
  await expect(inputEmail).toBeVisible();
});