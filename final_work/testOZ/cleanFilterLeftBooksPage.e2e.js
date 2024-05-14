const { browser } = require('@wdio/globals')
const menu = require('../pageobjects/components/menu');
const filterLeftBooksPage = require('../pageobjects/filterLeftBooksPage');
const filterTopPage = require('../pageobjects/components/filterTopPage');
const resultPage = require('../pageobjects/resultPage');
const { TEXT } = require('../helpers/constants');
const search = require('../pageobjects/components/search');

describe('Clean filter left of page Books tests', function() {

  beforeEach( async () =>{
    await search.navigate(TEXT.URL);
  });

  it('should clean filter on left Author after filter page Books by author and published year', async () =>{
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await filterLeftBooksPage.goLeftFilterByAuthorAndYear();
    await filterLeftBooksPage.goCleanFilterLeftAuthor();
    expect(await resultPage.productAuthorsAfterLeftFilter.getText()).toContain(TEXT.LEFT_FILTER_BOOKS_PUBLISHED_YEAR);
  });

  it('should clean filter on left Year after filter page Books by author and published year', async () =>{
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await filterLeftBooksPage.goLeftFilterByAuthorAndYear();
    await filterLeftBooksPage.goCleanFilterLeftYear();
    expect(await filterTopPage.startTopFilterSettings.getText()).toEqual(TEXT.START_FILTER_SETTINGS_ON_TOP);
  });

  it('should clean filters on left author and year after filter page Books by author and published year', async () =>{
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await filterLeftBooksPage.goLeftFilterByAuthorAndYear();
    await filterLeftBooksPage.goCleanFilterLeftAuthorAndYear();
    expect(await filterTopPage.startTopFilterSettings.getText()).toEqual(TEXT.START_FILTER_SETTINGS_ON_TOP);
    });
})