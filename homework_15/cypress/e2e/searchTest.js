const mainPage = require('../../page_object/main_page');
const search = require('../../page_object/components/searchField');

describe('Oz test', () => {
  it('should search by categories', () => {
    mainPage.navigate('https://oz.by/');
    search.searchByCategories('Дюна', '1');

  })
})