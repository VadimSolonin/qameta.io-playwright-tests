import QametaIoMainPage from '../pages/QametaIoMainPage';
import test, { expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://qameta.io/');
});

test('Open continuous testing page', async ({ page }) => {
  const qametaIoMainPage = new QametaIoMainPage(page);
  qametaIoMainPage.hoverFeaturesNavLink();
  qametaIoMainPage.clickFeaturesNavLink("Continuous Testing");
  await expect(page).toHaveTitle("Continuous testing with comprehensive CI/CD Integrations");
  await expect(page).toHaveURL("https://qameta.io/ci-integrations/");
});

test('Open cloud trial page', async ({ page }) => {
  const qametaIoMainPage = new QametaIoMainPage(page);
  qametaIoMainPage.clickFreeTrialButton();
  await expect(page).toHaveTitle("Allure TestOps: Centralized Test Reporting");
  await expect(page).toHaveURL("https://qameta.io/cloud-trial-request/");
  await expect(qametaIoMainPage.cloudTrialPageTitle).toHaveText("Try out Allure TestOps Cloud free for 14 days to speed up your testing")
});

test('Open sandbox page', async ({ page }) => {
  const qametaIoMainPage = new QametaIoMainPage(page);
  qametaIoMainPage.clickSandboxButton();
  await expect(page).toHaveTitle("Allure TestOps");
  await expect(qametaIoMainPage.inputEmail).toBeVisible();
});