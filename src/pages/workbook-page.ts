import { Page } from "@playwright/test";

export class WorkbookPage {
  constructor(private readonly page: Page) {}

  async clickIntoSheet(): Promise<void> {
    await this.page.mouse.click(500, 500, { delay: 5000 });
  }

  async moveDown(): Promise<void> {
    await this.page.keyboard.press("ArrowDown", { delay: 1000 });
  }

  async exitEditMode(): Promise<void> {
    await this.page.keyboard.press("Escape", { delay: 100 });
  }

  async moveToHome(): Promise<void> {
    await this.page.keyboard.press("Control+Home", { delay: 100 });
  }

  async typeFormula(formula: string): Promise<void> {
    await this.page.keyboard.type(formula, { delay: 200 });
  }

  async confirmFormula(): Promise<void> {
    await this.page.keyboard.press("Enter", { delay: 500 });
  }

  async moveUp(): Promise<void> {
    await this.page.keyboard.press("ArrowUp", { delay: 100 });
  }

  async copyActiveCell(): Promise<void> {
    await this.page.keyboard.press("Control+c", { delay: 100 });
    await this.page.waitForTimeout(300);
  }

  async readClipboard(): Promise<string> {
    return await this.page.evaluate(() => navigator.clipboard.readText());
  }
}
