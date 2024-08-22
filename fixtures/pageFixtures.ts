import { QametaIoMainPage } from "../pages/QametaIoMainPage";
import { CloudTrialRequestPage } from "../pages/CloudTrialRequestPage";
import { SandboxTestopsPage } from "../pages/SandboxTestopsPage";
import { ContinuousTestingPage } from "../pages/ContinuousTestingPage";
import { IntegrationWithJenkinsPage } from "../pages/IntegrationWithJenkinsPage";
import { test as base } from "@playwright/test";


type Fixtures = {
    qametaIoMainPage : QametaIoMainPage;
    cloudTrialRequestPage : CloudTrialRequestPage;
    sandboxTestopsPage : SandboxTestopsPage;
    continuousTestingPage : ContinuousTestingPage;
    integrationWithJenkinsPage : IntegrationWithJenkinsPage;
}

export const test = base.extend<Fixtures>({
qametaIoMainPage: async({ page }, use) => {
    const qametaIoMainPage = new QametaIoMainPage(page);
    await use(qametaIoMainPage);
},

cloudTrialRequestPage: async({ page }, use) => {
    const cloudTrialRequestPage = new CloudTrialRequestPage(page);
    await use(cloudTrialRequestPage);
},

sandboxTestopsPage: async({ page }, use) => {
    const sandboxTestopsPage = new SandboxTestopsPage(page);
    await use(sandboxTestopsPage);
},

continuousTestingPage: async({ page }, use) => {
    const continuousTestingPage = new ContinuousTestingPage(page);
    await use(continuousTestingPage);
},

integrationWithJenkinsPage: async({ page }, use) => {
    const integrationWithJenkinsPage = new IntegrationWithJenkinsPage(page);
    await use(integrationWithJenkinsPage);
}
});

export { expect } from '@playwright/test';