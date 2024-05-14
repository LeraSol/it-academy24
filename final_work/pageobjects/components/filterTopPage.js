const { $, $$ } = require('@wdio/globals')
const Base = require('../base');

class FilterTopPage extends Base {

  get filterButton() {
    return $('.top-filters__eselect__item.top-filters__viewer__open')
  }

  get filterByCheapPriceButton() {
    return $('[data-sort=\'price_asc\']')
  }

  get filterByRatingButton() {
    return $('[data-sort=rating_desc]')
  }

  get startTopFilterSettings() {
    return $('.top-filters__sqcheckers.top-filters__sqcheckers--flat')
  }

  get cleanFilterTop() {
    return $$('.top-filters__sqcheckers__del');
  }

  get cleanAllFiltersTop() {
    return $('.top-filters__sqcheckers__clear');
  }

  async goFilterByCheapPrice() {
    await this.filterButton.click();
    await this.filterByCheapPriceButton.click();
  }

  async goFilterByRating() {
    await this.filterButton.click();
    await this.filterByRatingButton.click();
  }

  async goCleanFiltersTop(firstFilter, secondFilter) {
    await this.cleanFilterTop[firstFilter].click();
    await this.cleanFilterTop[secondFilter].click();
  }

  async goCleanAllFiltersTop() {
    await this.cleanAllFiltersTop.click();
  }
}

module.exports = new FilterTopPage();