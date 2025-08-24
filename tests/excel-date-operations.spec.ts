import { expect } from "@playwright/test";
import { test } from "@fixtures";
import { env, DateUtils } from "@utils";;

test.describe("Excel Online - TODAY() function", () => {
  test.beforeEach(async ({ loginPage, page }) => {
    await loginPage.gotoExcel();
    // await loginPage.loginToExcel(env.EXCEL_USER, env.EXCEL_PASSWORD);
    await loginPage.clickCreateBlankWorkbook();
    await page.waitForLoadState();
  });

  // --- FOR LOOP VERSION ---
  test.only("should verify TODAY() returns correct value (regular for)", async ({ workbookPage }, testInfo) => {
    const expected = DateUtils.todayFormatted("eu");

    let cellValue = "";
    let success = false;

    for (let i = 0; i < 10; i++) {
      await workbookPage.clickIntoSheet();
      await workbookPage.moveDown();
      await workbookPage.exitEditMode();
      await workbookPage.moveToHome();

      await workbookPage.typeFormula("=TODAY()");
      await workbookPage.confirmFormula();

      await workbookPage.moveUp();
      await workbookPage.copyActiveCell();
      cellValue = (await workbookPage.readClipboard()).trim();

      testInfo.attachments.push({
        name: `For loop attempt: ${i + 1}`,
        contentType: "text/plain",
        body: Buffer.from(`Value: "${cellValue}"`),
      });

      if (cellValue === expected) {
        success = true;
        break;
      }
    }

    expect(success, `Expected TODAY() to match ${expected}, last value: "${cellValue}"`).toBe(true);
  });

  // --- TO PASS VERSION ---
  test("should verify TODAY() returns correct value (toPass)", async ({ workbookPage }, testInfo) => {
    const expected = DateUtils.todayFormatted("eu");
    let cellValue = "";
    let attempt = 0;

    await expect(async () => {
      attempt++;

      await workbookPage.clickIntoSheet();
      await workbookPage.moveDown();
      await workbookPage.exitEditMode();
      await workbookPage.moveToHome();

      await workbookPage.typeFormula("=TODAY()");
      await workbookPage.confirmFormula();

      await workbookPage.moveUp();
      await workbookPage.copyActiveCell();
      cellValue = (await workbookPage.readClipboard()).trim();

      testInfo.attachments.push({
        name: `ToPass attempt: ${attempt}`,
        contentType: "text/plain",
        body: Buffer.from(`Value: "${cellValue}"`),
      });

      expect(cellValue, `Clipboard value: "${cellValue}", expected: ${expected}`).toBe(expected);
    }).toPass({
      timeout: 80_000,
      intervals: [10_000],
    });
  });

  // --- POLL VERSION ---
  test("should verify TODAY() returns correct value (expect.poll)", async ({ workbookPage }, testInfo) => {
    const expected = DateUtils.todayFormatted("eu");
    let lastValue = "";
    let attempt = 0;

    await expect
      .poll(async () => {
        attempt++;

        await workbookPage.clickIntoSheet();
        await workbookPage.moveDown();
        await workbookPage.exitEditMode();
        await workbookPage.moveToHome();

        await workbookPage.typeFormula("=TODAY()");
        await workbookPage.confirmFormula();

        await workbookPage.moveUp();
        await workbookPage.copyActiveCell();
        lastValue = (await workbookPage.readClipboard()).trim();

        testInfo.attachments.push({
          name: `Polling attempt: ${attempt}`,
          contentType: "text/plain",
          body: Buffer.from(`Value: "${lastValue}"`),
        });

        return lastValue;
      }, {
        message: `Expected TODAY() to match ${expected}, last value: "${lastValue}"`,
        timeout: 80_000,
        intervals: [10_000],
      })
      .toBe(expected);
  });
});
