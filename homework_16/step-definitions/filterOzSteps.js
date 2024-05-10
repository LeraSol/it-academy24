const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

When(/^I filter page by cheap price$/, async () => {
  await $('.top-filters__eselect__item.top-filters__viewer__open').click()
  await $('[href="https://oz.by/beauty/?sort=price_asc"]').click()
});

Then(/^I should see page with filter by cheap price$/, async () => {
  const page = await $('[href="https://oz.by/beauty/?sort=price_asc"]');
  await expect(await page.getUrl()).toContain('/?sort=price_asc')
});