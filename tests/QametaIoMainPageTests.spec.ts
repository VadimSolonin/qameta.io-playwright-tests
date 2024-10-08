import Helpers from '../utils/helpers';
import { test } from '../fixtures/pageFixtures';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.MAIN_PAGE_URL!);
});

test('Open continuous testing page', async ({ page, qametaIoMainPage }) => {
  await qametaIoMainPage.hoverFeaturesNavLink();
  await qametaIoMainPage.clickFeaturesNavLink("Continuous Testing");
  await Helpers.verifyPageTitle(page, "Continuous testing with comprehensive CI/CD Integrations");
  await Helpers.verifyPageUrl(page, "https://qameta.io/ci-integrations/");
});

test('Open cloud trial page', async ({ page, qametaIoMainPage, cloudTrialRequestPage }) => {
  await qametaIoMainPage.clickFreeTrialButton();
  await Helpers.verifyPageTitle(page, "Allure TestOps: Centralized Test Reporting");
  await Helpers.verifyPageUrl(page, "https://qameta.io/cloud-trial-request/");
  await cloudTrialRequestPage.verifyCloudTrialTextTitle("Try out Allure TestOps Cloud free for 14 days to speed up your testing");
});

test('Open sandbox page', async ({ page, qametaIoMainPage, sandboxTestopsPage }) => {
  await qametaIoMainPage.clickSandboxButton();
  await Helpers.verifyPageTitle(page, "Allure TestOps");
  await sandboxTestopsPage.verifyEmailInputVisibility();
});