const { test, expect } = require('@playwright/test');
const MainPage = require('../page_object/mainPage');
const LeftNavMenu = require('../page_object/components/leftNavMenu');
const SectionBooks = require('../page_object/components/sectionBooks');

test.describe('oz test', async function () {
  let mainPage;
  let leftNavMenu;
  let sectionBooks;

  test.beforeEach(async ({page, context}) => {
    mainPage = new MainPage(page);
    leftNavMenu = new LeftNavMenu(page);
    sectionBooks = new SectionBooks(page);
  });

  test('should add first item in section Books to cart', async ({page}) => {
    await mainPage.navigate('https://oz.by/');
    await leftNavMenu.goToPageByLeftNavMenu('Книги');
    await sectionBooks.addFirstBookInCart()
    await sectionBooks.isVisibleCartCount();
    const cartCount = await sectionBooks.getCartCount();
    await expect(await cartCount.textContent()).toEqual('1');
  })
});