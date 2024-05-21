const search = require('../pageobjects/components/search');
const resultPage = require('../pageobjects/resultPage');
const { TEXT } = require('../helpers/constants');

describe('Search item by categories', function() {

  beforeEach( async () =>{
    await search.navigate(TEXT.URL);
  })

  it('should search item in often searched', async () => {
    await search.lookByOftenSearched(TEXT.SEARCH_TEXT);
    expect (await resultPage.productTitlesAfterSearch.getText()).toContain(TEXT.SEARCH_TEXT);
  });

  it('should search item in popular', async () => {
    await search.lookByPopularItems(TEXT.SEARCH_TEXT);
    expect (await resultPage.productTitleItemAfterSearch.getText()).toContain(TEXT.SEARCH_TEXT);
  });

  it('should search item in categories name', async () => {
    await search.lookByCategories(TEXT.SEARCH_TEXT);
    expect (await resultPage.productTitlesAfterSearch.getText()).toContain(TEXT.SEARCH_TEXT);
  });

  it('should search item in all results', async () => {
    await search.lookAllResults(TEXT.SEARCH_TEXT);
    expect (await resultPage.productTitlesAfterSearch.getText()).toContain(TEXT.SEARCH_TEXT);
  });
})