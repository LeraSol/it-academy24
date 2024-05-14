const { browser } = require('@wdio/globals')
const menu = require('../pageobjects/components/menu');
const filterLeftBooksPage = require('../pageobjects/filterLeftBooksPage');
const filterTopPage = require('../pageobjects/components/filterTopPage');
const resultPage = require('../pageobjects/resultPage');
const { TEXT } = require('../helpers/constants');

describe('Clean filter top of page Books tests', function() {

  it('should clean filters author and published year on top after filter page Books by author and published year', async () =>{
    await menu.navigate(TEXT.URL);
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await filterLeftBooksPage.goLeftFilterByAuthorAndYear();
    await filterTopPage.goCleanFiltersTop(0,0);
    expect(await filterTopPage.startTopFilterSettings.getText()).toEqual(TEXT.START_FILTER_SETTINGS_ON_TOP);
  });

  it('should clean all filters together on top after filter page Books by author and published year', async () =>{
    await filterTopPage.goCleanAllFiltersTop();
    expect(await filterTopPage.startTopFilterSettings.getText()).toEqual(TEXT.START_FILTER_SETTINGS_ON_TOP);
  });

})