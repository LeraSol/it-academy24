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
    await this.filterButton.moveTo()
    await this.baseClick(await this.filterButton);
    await this.baseClick(await this.filterByCheapPriceButton);
  }

  async goFilterByRating() {
    await this.filterButton.moveTo()
    await this.baseClick(await this.filterButton);
    await this.baseClick(await this.filterByRatingButton);
  }

  async goCleanFiltersTop(firstFilter, secondFilter) {
    await this.baseClick(await this.cleanFilterTop[firstFilter]);
    await this.baseClick(await this.cleanFilterTop[secondFilter]);
  }

  async goCleanAllFiltersTop() {
    await this.baseClick(await this.cleanAllFiltersTop);
  }
}

module.exports = new FilterTopPage();