const { $, $$ } = require('@wdio/globals')
const Base = require('../base');

class Search extends Base {

  get searchButton () {
    return $('#top-s');
  }

  get oftenSearched () {
    return $$('.digi-ac-query__name');
  }

  get searchInPopularItems () {
    return $$('.digi-product__meta');
  }

  get searchCategories () {
    return $$('span.digi-ac-category__name');
  }

  get allResults () {
    return $$('.digi-ac-find__button');
  }

  async lookByOftenSearched (text){
    await this.searchButton.setValue(text);
    await this.oftenSearched[0].click();
  }

  async lookByPopularItems (text){
    await this.searchButton.setValue(text);
    await this.searchInPopularItems[0].click();
  }

  async lookByCategories (text){
    await this.searchButton.setValue(text);
    await this.searchCategories[0].click();
  }

  async lookAllResults (text){
    await this.searchButton.setValue(text);
    await this.allResults[0].click();
  }
}

module.exports = new Search();