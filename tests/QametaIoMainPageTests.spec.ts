import { test } from '../fixtures/pageFixtures';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.MAIN_PAGE_URL!);
});

test('Open continuous testing page', async ({ qametaIoMainPage }) => {
  await qametaIoMainPage.hoverFeaturesNavLink();
  await qametaIoMainPage.clickFeaturesNavLink("Continuous Testing");
  await qametaIoMainPage.assertTitle("Continuous testing with comprehensive CI/CD Integrations");
  await qametaIoMainPage.assertUrl("https://qameta.io/ci-integrations/");
});

test('Open cloud trial page', async ({ qametaIoMainPage, cloudTrialRequestPage }) => {
  await qametaIoMainPage.clickFreeTrialButton();
  await cloudTrialRequestPage.assertTitle("Allure TestOps: Centralized Test Reporting");
  await cloudTrialRequestPage.assertUrl("https://qameta.io/cloud-trial-request/");
  await cloudTrialRequestPage.assertCloudTrialTextTitle("Start my free trial");
});

test('Open sandbox page', async ({ qametaIoMainPage, sandboxTestopsPage }) => {
  await qametaIoMainPage.clickSandboxButton();
  await sandboxTestopsPage.assertTitle("Allure TestOps");
  await sandboxTestopsPage.assertEmailInputVisible();
});