import { test as base } from "@playwright/test";
import { LoginPage } from "@pages/login-page";
import { WorkbookPage } from "@pages/workbook-page";
import { PagesFixture } from "@typings/fixtures";


export const test = base.extend<PagesFixture>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  workbookPage: async ({ page }, use) => {
    await use(new WorkbookPage(page));
  },
});
