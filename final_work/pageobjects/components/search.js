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
    await this.baseClick(await this.oftenSearched[0]);
  }

  async lookByPopularItems (text){
    await this.searchButton.setValue(text);
    await this.baseClick(await this.searchInPopularItems[0]);
  }

  async lookByCategories (text){
    await this.searchButton.setValue(text);
    await this.baseClick(await this.searchCategories[0]);
  }

  async lookAllResults (text){
    await this.searchButton.setValue(text);
    await this.baseClick(await this.allResults[0]);
  }
}

module.exports = new Search();