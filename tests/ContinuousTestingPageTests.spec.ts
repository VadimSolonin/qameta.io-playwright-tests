import { test } from '../fixtures/pageFixtures';

test.beforeEach(async ({ page }) => {
    await page.goto('https://qameta.io/ci-integrations/');
  });


test('Open integration with Jenkins page in new tab', async ({ continuousTestingPage, integrationWithJenkinsPage, page}) => {
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      await continuousTestingPage.clickJenkinsIntegrationLink()
    ])
    await newPage.waitForLoadState();
    integrationWithJenkinsPage.verifyJenkinsIntegrationTextTitle(newPage, "Integration with Jenkins");
  });