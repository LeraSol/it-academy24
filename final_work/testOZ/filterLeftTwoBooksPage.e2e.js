const { browser } = require('@wdio/globals')
const menu = require('../pageobjects/components/menu');
const filterLeftBooksPage = require('../pageobjects/filterLeftBooksPage');
const resultPage = require('../pageobjects/resultPage');
const { TEXT } = require('../helpers/constants');

describe('Filter left of page Books tests', function() {

it('should filter page Books together by author and published year ', async () =>{
  await menu.navigate(TEXT.URL);
  await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
  await filterLeftBooksPage.goLeftFilterByAuthorAndYear();
  expect(await resultPage.productAuthorsAfterLeftFilter.getText()).toContain(TEXT.LEFT_FILTER_BOOKS_AUTHOR_AND_YEAR)
  });
})