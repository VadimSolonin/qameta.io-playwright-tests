import QametaIoMainPage from '../pages/QametaIoMainPage';
import test, { expect } from '@playwright/test';
import Helpers from '../utils/helpers';

test.beforeEach(async ({ page }) => {
  await page.goto('https://qameta.io/');
});

test('Open continuous testing page', async ({ page }) => {
  const qametaIoMainPage = new QametaIoMainPage(page);
  await qametaIoMainPage.hoverFeaturesNavLink();
  await qametaIoMainPage.clickFeaturesNavLink("Continuous Testing");
  await Helpers.verifyPageTitle(page, "Continuous testing with comprehensive CI/CD Integrations");
  await Helpers.verifyPageUrl(page, "https://qameta.io/ci-integrations/");
});

test('Open cloud trial page', async ({ page }) => {
  const qametaIoMainPage = new QametaIoMainPage(page);
  await qametaIoMainPage.clickFreeTrialButton();
  await Helpers.verifyPageTitle(page, "Allure TestOps: Centralized Test Reporting");
  await Helpers.verifyPageUrl(page, "https://qameta.io/cloud-trial-request/");
  await Helpers.verifyPageText(qametaIoMainPage.cloudTrialPageTitle, "Try out Allure TestOps Cloud free for 14 days to speed up your testing")
});

test('Open sandbox page', async ({ page }) => {
  const qametaIoMainPage = new QametaIoMainPage(page);
  await qametaIoMainPage.clickSandboxButton();
  await Helpers.verifyPageTitle(page, "Allure TestOps");
  await Helpers.verifyLocatorVisibility(qametaIoMainPage.inputEmail);
});