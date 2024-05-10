const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');


When(/^I search text "(.*)" in search field$/, async function(searchText)  {
  await $('#top-s').setValue(searchText);
  await $('button.digi-ac-find__button').click();
});

Then(/^I should see text "(.*)" in element "(.*)"(|.* number)$/, async (text, element, elementNumber) => {
  if(elementNumber) {
    const number = parseInt(elementNumber, 10);
    await expect(await $$(element)[Number(number)].getText()).toContain(text);
  } else {
    await expect(await $(element).getText()).toContain(text);
  }
});