// @ts-check
const { test, expect } = require("@playwright/test");

test("sauce demo test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  const inputUsername = page.locator("#user-name");

  await inputUsername.fill("standard_user");
  await expect(inputUsername).toHaveValue("standard_user");

  const inputPassword = page.locator("#password");

  await inputPassword.fill("secret_sauce");
  await expect(inputPassword).toHaveValue("secret_sauce");

  const buttonLogin = page.locator("#login-button");

  await buttonLogin.click();

  const buttonAddToCart = page.locator('button:has-text("Add to Cart")');
  await buttonAddToCart.nth(1).click();

  const cartIcon = page.locator(".shopping_cart_link");
  await cartIcon.click();

  const checkoutButton = page.locator("#checkout");
  await checkoutButton.click();

  const inputName = page.locator("#first-name");

  await inputName.fill("zikri");
  await expect(inputName).toHaveValue("zikri");

  const inputLastName = page.locator("#last-name");

  await inputLastName.fill("azzuri");
  await expect(inputLastName).toHaveValue("azzuri");

  const inputPostalCode = page.locator("#postal-code");

  await inputPostalCode.fill("12345");
  await expect(inputPostalCode).toHaveValue("12345");

  const continueButton = page.locator("#continue");
  await continueButton.click();

  const finishButton = page.locator("#finish");
  await finishButton.click();

  const finishText = page.locator(".complete-header");
  await expect(finishText).toHaveText("Thank you for your order!");

  const buttonBack = page.locator("#back-to-products");
  await buttonBack.click();
});
