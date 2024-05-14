const { browser } = require('@wdio/globals')
const menu = require('../pageobjects/components/menu');
const filterTopPage = require('../pageobjects/components/filterTopPage');
const { TEXT } = require('../helpers/constants');

describe('Filter at the top of page tests', function() {

  it('should filter page Boardgames > Квесты by cheap price', async () =>{
    await menu.navigate(TEXT.URL);
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOARDGAMES, TEXT.SECOND_MENU_BOARDGAMES);
    await filterTopPage.goFilterByCheapPrice();
    expect (await browser.getUrl()).toContain(TEXT.URL_AFTER_FILTER_BY_CHEAP_PRICE);
  });

  it('should filter page Books by rating', async () =>{
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await filterTopPage.goFilterByRating();
    expect (await browser.getUrl()).toContain(TEXT.URL_AFTER_FILTER_BY_RATING);
  });
})