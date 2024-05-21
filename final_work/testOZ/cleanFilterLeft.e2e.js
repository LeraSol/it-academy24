const menu = require('../pageobjects/components/menu');
const filterLeftBooksPage = require('../pageobjects/filterLeftBooksPage');
const filterTopPage = require('../pageobjects/components/filterTopPage');
const resultPage = require('../pageobjects/resultPage');
const { TEXT } = require('../helpers/constants');
const search = require('../pageobjects/components/search');

describe('Clean filter left of page Books tests', function() {

  it('should clean filter on left Author after filter page Books by author and published year', async () =>{
    await search.navigate(TEXT.URL);
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByAuthor[0]);
    await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByYear[0]);
    await filterLeftBooksPage.goCleanFilterLeft(filterLeftBooksPage.filterByAuthor[0], 0);
    expect(await resultPage.itemDescription.getText()).toContain(TEXT.LEFT_FILTER_BOOKS_PUBLISHED_YEAR)
  });

  it('should clean filter on left Year after filter page Books by author and published year', async () =>{
    await search.navigate(TEXT.URL);
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByAuthor[0]);
    await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByYear[0]);
    await filterLeftBooksPage.goCleanFilterLeft(filterLeftBooksPage.filterByYear[0], 1);
    expect(await resultPage.itemDescription.getText()).toContain(TEXT.LEFT_FILTER_BOOKS_AUTHOR);
  });

  it('should clean filters on left author and year after filter page Books by author and published year', async () =>{
    await search.navigate(TEXT.URL);
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByAuthor[0]);
    await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByYear[0]);
    await filterLeftBooksPage.goCleanFilterLeft(filterLeftBooksPage.filterByAuthor[0], 0);
    await filterLeftBooksPage.goCleanFilterLeft(filterLeftBooksPage.filterByYear[0], 1);
    expect(await filterTopPage.startTopFilterSettings.getText()).toEqual(TEXT.START_FILTER_SETTINGS_ON_TOP);
    });
})