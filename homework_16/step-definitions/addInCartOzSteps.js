const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

When(/^I go to "(.*)" "(.*)"$/, async (text, locator) => {
  await $(locator).click()
});

When(/^I add item in cart$/, async () => {
  await $('article:nth-child(1) button').click()
});

Then(/^I should see number in cart$/, async () => {
  await expect(await $('#cart-count').getText()).toContain("1")
});
