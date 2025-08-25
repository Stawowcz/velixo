import { test as base, BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "@pages/login-page";
import { WorkbookPage } from "@pages/workbook-page";

export type PagesFixture = {
  context: BrowserContext;
  page: Page;
  loginPage: LoginPage;
  workbookPage: WorkbookPage;
};