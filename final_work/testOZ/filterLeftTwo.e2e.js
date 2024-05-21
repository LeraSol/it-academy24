const menu = require('../pageobjects/components/menu');
const filterLeftBooksPage = require('../pageobjects/filterLeftBooksPage');
const resultPage = require('../pageobjects/resultPage');
const { TEXT } = require('../helpers/constants');

describe('Filter left of page Books tests', function() {

it('should filter page Books together by author and published year ', async () =>{
  await menu.navigate(TEXT.URL);
  await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
  await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByAuthor[0]);
  await filterLeftBooksPage.goLeftFilterBy(filterLeftBooksPage.filterByYear[0]);
  expect(await resultPage.itemDescription.getText()).toContain(TEXT.LEFT_FILTER_BOOKS_AUTHOR)
  });

  it('should filter page Books together by author and published year ', async () =>{
    expect(await resultPage.itemDescription.getText()).toContain(TEXT.LEFT_FILTER_BOOKS_PUBLISHED_YEAR)
  });
})