import { QametaIoMainPage } from "../pages/QametaIoMainPage";
import { test as base } from "@playwright/test";

type Fixtures = {
    qametaIoMainPage : QametaIoMainPage;
}

export const test = base.extend<Fixtures>({
qametaIoMainPage: async({ page }, use) => {
    const qametaIoMainPage = new QametaIoMainPage(page);
    await use(qametaIoMainPage);
}
});

export { expect } from '@playwright/test';