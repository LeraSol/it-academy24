const menu = require('../pageobjects/components/menu');
const filterLeftBooksPage = require('../pageobjects/filterLeftBooksPage');
const resultPage = require('../pageobjects/resultPage');
const { TEXT } = require('../helpers/constants');
const search = require('../pageobjects/components/search');

describe('Filter left of page Books tests', function() {

  beforeEach( async () =>{
    await search.navigate(TEXT.URL);
  });

it('should filter page Books by author', async () =>{
  await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
  await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByAuthor[0]);
  expect(await resultPage.itemDescription.getText()).toContain(TEXT.LEFT_FILTER_BOOKS_AUTHOR)
  });

  it('should filter result page Books by published year', async () =>{
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByYear[0]);
    expect(await resultPage.itemDescription.getText()).toContain(TEXT.LEFT_FILTER_BOOKS_PUBLISHED_YEAR)
  });
})