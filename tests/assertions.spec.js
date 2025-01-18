// @ts-check
const { test } = require("@playwright/test");
const { default: loginAction } = require("../tests/action/loginAction");

test("PMO Test", async ({ page }) => {
  const objActions = new loginAction(page);
  await objActions.goto();
  await objActions.inputLogin();
  await objActions.addToCart();
  await objActions.transaction();
  await objActions.checkout();
  await objActions.detailCheckout();
});
