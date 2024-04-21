const { test, expect } = require('@playwright/test');
const MainPage = require('../page_object/mainPage');

test.describe('oz test', async function () {
  let mainPage;

  test.beforeEach(async ({page, context}) => {
    mainPage = new MainPage(page);
  });

  test('should search Дюна', async ({page}) => {
    await mainPage.navigate('https://oz.by/');
    await mainPage.goToSearchItemName('Дюна')
    const firstName = await mainPage.getFirstItemNameAfterSearch('Дюна')
    await expect(await firstName.textContent()).toContain('Дюна');
  })
});