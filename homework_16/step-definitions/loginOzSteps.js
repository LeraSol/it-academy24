const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const Base = require('../pageobjects/base');

const base = new Base();

Given(/^I navigate to "(.*)"$/, async (url) => {
    await base.navigate(url);
});

When(/^I login without email$/, async () => {
    await $('.user-bar__item .link.user-bar__item').click()
    await $('#loginFormLoginEmailLink').click()
    await $('#loginForm > button').click()
});

Then(/^I should see text "(.*)"$/, async (text) => {
    await expect(await $$('.i-input-group__popover_visible > div')[0].getText()).toEqual(text);
});

