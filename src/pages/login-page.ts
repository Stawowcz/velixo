import { Locator } from "@playwright/test";
import { BasePage } from "@pages";

export class LoginPage extends BasePage {
  private readonly signInText: Locator = this.page.getByText("Sign in");
  private readonly signInLink: Locator = this.page.getByRole("link", { name: "Sign in" });
  private readonly emailField: Locator = this.page.getByRole("textbox", { name: "Enter your email, phone, or Skype." });
  private readonly nextButton: Locator = this.page.getByRole("button", { name: "Next" });
  private readonly passwordField: Locator = this.page.locator("#passwordEntry");
  private readonly primaryButton: Locator = this.page.getByTestId("primaryButton");
  private readonly createWorkbookButton: Locator = this.page.getByRole("button", { name: "Create blank workbook" });
  private readonly otherWaysButton: Locator = this.page.getByRole('button', { name: 'Other ways to sign in' });
  private readonly usePasswordButton: Locator = this.page.getByRole("button", { name: "Use your password" });
  private readonly problemLoc: Locator = this.page.getByText('Email js*****@gmail.com')


  public async gotoExcel(): Promise<void> {
    await this.goto(process.env.EXCEL_BASEURL);
    await this.signInText.waitFor({ state: "visible" });
  }

  public async clickSignInLink(): Promise<void> {
    await this.safeClick(this.signInLink);
  }

  public async clickproblemLoc(): Promise<void> {
    await this.safeClick(this.problemLoc);
  }

  public async clickOtherWaysButton(): Promise<void> {
    await this.safeClick(this.otherWaysButton);
  }
  
  public async clickUsePasswordButton(): Promise<void> {
    await this.safeClick(this.usePasswordButton);
  }
  public async fillEmail(email: string): Promise<void> {
    await this.safeFill(this.emailField, email);
  }

  public async clickNextButton(): Promise<void> {
    await this.safeClick(this.nextButton);
  }

  public async fillPassword(password: string): Promise<void> {
    await this.safeFill(this.passwordField, password);
  }

  public async clickPrimaryButton(): Promise<void> {
    await this.safeClick(this.primaryButton);
  }

  public async clickCreateBlankWorkbook(): Promise<void> {
    await this.safeClick(this.createWorkbookButton);
  }
public async loginToExcel(email: string, password: string): Promise<void> {
  await this.clickSignInLink();
  await this.fillEmail(email);
  await this.clickNextButton();

  // kliknij tylko jeśli przycisk jest widoczny
  if (await this.otherWaysButton.isVisible()) {
    await this.otherWaysButton.click();
  }

  if (await this.usePasswordButton.isVisible()) {
    await this.usePasswordButton.click();
  }

  await this.fillPassword(password);
  if (await this.problemLoc.isVisible()) {
    await this.clickproblemLoc()
  }
  await this.clickPrimaryButton();
  if (await this.problemLoc.isVisible()) {
    await this.clickproblemLoc()
  }
  await this.clickPrimaryButton();
}

}
