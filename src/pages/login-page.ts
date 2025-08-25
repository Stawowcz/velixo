import { Locator } from "@playwright/test";
import { BasePage } from "@pages";

export class LoginPage extends BasePage {
  private readonly signInLink: Locator = this.page.getByRole("link", {
    name: "Sign in",
  });
  private readonly emailField: Locator = this.page.getByRole("textbox", {
    name: "Enter your email, phone, or Skype.",
  });
  private readonly nextButton: Locator = this.page.getByRole("button", {
    name: "Next",
  });
  private readonly passwordField: Locator = this.page.locator("#passwordEntry");
  private readonly primaryButton: Locator =
    this.page.getByTestId("primaryButton");
  private readonly createWorkbookButton: Locator = this.page.getByRole(
    "button",
    { name: "Create blank workbook" },
  );
  private readonly otherWaysButton: Locator = this.page.getByRole("button", {
    name: "Other ways to sign in",
  });
  private readonly usePasswordButton: Locator = this.page.getByRole("button", {
    name: "Use your password",
  });
  private readonly problemLoc: Locator = this.page.getByRole("radio", {
    name: "Email js*****@gmail.com",
  });

  public async gotoExcel(): Promise<void> {
    await this.goto(process.env.EXCEL_BASEURL);
  }

  private async clickSignInLink(): Promise<void> {
    await this.safeClick(this.signInLink);
  }

  private async clickproblemLoc(): Promise<void> {
    await this.safeClick(this.problemLoc);
  }

  private async clickOtherWaysButton(): Promise<void> {
    await this.safeClick(this.otherWaysButton);
  }

  private async clickUsePasswordButton(): Promise<void> {
    await this.safeClick(this.usePasswordButton);
  }
  private async fillEmail(email: string): Promise<void> {
    await this.safeFill(this.emailField, email);
  }

  private async clickNextButton(): Promise<void> {
    await this.safeClick(this.nextButton);
  }

  private async fillPassword(password: string): Promise<void> {
    await this.safeFill(this.passwordField, password);
  }

  private async clickPrimaryButton(): Promise<void> {
    await this.safeClick(this.primaryButton);
  }

  public async clickCreateBlankWorkbook(): Promise<void> {
    await this.safeClick(this.createWorkbookButton);
  }
  
  public async loginToExcel(email: string, password: string): Promise<void> {
    await this.clickSignInLink();
    await this.fillEmail(email);
    await this.clickNextButton();

    if (await this.otherWaysButton.isVisible()) {
      await this.clickOtherWaysButton();
    }

    if (await this.usePasswordButton.isVisible()) {
      await this.clickUsePasswordButton();
    }

    await this.fillPassword(password);

    if (await this.problemLoc.isVisible()) {
      await this.clickproblemLoc();
      await this.clickNextButton();
    }

    await this.clickPrimaryButton();

    if (await this.problemLoc.isVisible()) {
      await this.clickproblemLoc();
      await this.clickNextButton();
    }

    await this.clickPrimaryButton();
  }
}
