import * as fs from "fs";
import { env } from "@utils";
import { test } from "@fixtures";

test("auth setup: login and save storage state", async ({
  loginPage,
  page,
}) => {
  await loginPage.gotoExcel();
  await page.waitForLoadState();

  await loginPage.loginToExcel(env.EXCEL_USER, env.EXCEL_PASSWORD);

  await loginPage.clickCreateBlankWorkbook();
  await page.waitForLoadState();

  const state = await page.context().storageState();
  fs.writeFileSync("storageState.json", JSON.stringify(state, null, 2));
});
