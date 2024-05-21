const menu = require('../pageobjects/components/menu');
const filterLeftBooksPage = require('../pageobjects/filterLeftBooksPage');
const filterTopPage = require('../pageobjects/components/filterTopPage');
const { TEXT } = require('../helpers/constants');
const search = require('../pageobjects/components/search');

describe('Clean filter top of page Books tests', function() {

  beforeEach( async () =>{
    await search.navigate(TEXT.URL);
  });

  it('should clean filters author and published year on top after filter page Books by author and published year', async () =>{
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByAuthor[0]);
    await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByYear[0]);
    await filterTopPage.goCleanFiltersTop(0,0);
    expect(await filterTopPage.startTopFilterSettings.getText()).toEqual(TEXT.START_FILTER_SETTINGS_ON_TOP);
  });

  it('should clean all filters together on top after filter page Books by author and published year', async () =>{
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByAuthor[0]);
    await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByYear[0]);
    await filterTopPage.goCleanAllFiltersTop();
    expect(await filterTopPage.startTopFilterSettings.getText()).toEqual(TEXT.START_FILTER_SETTINGS_ON_TOP);
  });

})