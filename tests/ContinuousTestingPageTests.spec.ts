import { expect, test } from '../fixtures/pageFixtures';

test.beforeEach(async ({ page }) => {
    await page.goto('https://qameta.io/ci-integrations/');
  });


test('Open integration with Jenkins page in new tab', async ({ continuousTestingPage, page}) => {
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      await continuousTestingPage.clickJenkinsIntegrationLink()
    ])
    await newPage.waitForLoadState();
    await expect(newPage.locator('#integration-with-jenkins')).toHaveText("Integration with Jenkins")
  });