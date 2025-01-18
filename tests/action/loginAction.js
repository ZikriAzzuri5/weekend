import loginLocator from "../locator/loginLocator";
import { expect } from "@playwright/test";

export default class loginAction {
  /**
   *
   * @param {import ('@playwright/test').Page } page
   */
  constructor(page) {
    this.page = page;
    this.loginLocator = new loginLocator();
    this.inputUsername = page.locator(this.loginLocator.inputUsername);
    this.inputPassword = page.locator(this.loginLocator.inputPassword);
    this.buttonLogin = page.locator(this.loginLocator.clickButtonLogin);
    this.buttonAddToCart = page.locator(this.loginLocator.clickAddToCart);
    this.iconCart = page.locator(this.loginLocator.clickCartIcon);
    this.buttonCheckout = page.locator(this.loginLocator.clickButtonCheckout);
    this.inputFirstname = page.locator(this.loginLocator.inputFirstname);
    this.inputLastname = page.locator(this.loginLocator.inputLastname);
    this.inputPostalCode = page.locator(this.loginLocator.inputPostalCode);
    this.buttonContinue = page.locator(this.loginLocator.clickButtonContinue);
    this.buttonFinish = page.locator(this.loginLocator.clickButtonFinish);
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async inputLogin() {
    await this.inputUsername.fill("standard_user");
    await expect(this.inputUsername).toHaveValue("standard_user");
    await this.inputPassword.fill("secret_sauce");
    await expect(this.inputPassword).toHaveValue("secret_sauce");
    await this.buttonLogin.click();
  }

  async addToCart() {
    await this.buttonAddToCart.click();
    await this.iconCart.click();
  }

  async transaction() {
    await this.buttonCheckout.click();
  }

  async checkout() {
    await this.inputFirstname.fill("zikri");
    await expect(this.inputFirstname).toHaveValue("zikri");
    await this.inputLastname.fill("azzuri");
    await expect(this.inputLastname).toHaveValue("azzuri");
    await this.inputPostalCode.fill("41532");
    await expect(this.inputPostalCode).toHaveValue("41532");
    await this.buttonContinue.click();
  }

  async detailCheckout() {
    await this.buttonFinish.click();
  }
}
