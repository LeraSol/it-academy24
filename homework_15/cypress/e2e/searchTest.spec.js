const mainPage = require('../../page_object/main_page');
const searchField = require('../../page_object/components/searchField');
const searchResultPage = require('../../page_object/searchResult_page');
const { TEXT } = require('../../cypress/helpers/constants');

describe('Oz test', () => {
  it('should search by categories', () => {
    mainPage.navigate('https://oz.by/');
    searchField.searchByCategories(TEXT.BOOK_TEXT, 1);
    cy.validateElementsText(searchResultPage.productTitles, TEXT.BOOK_TEXT);
  })
})