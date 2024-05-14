const { $, $$ } = require('@wdio/globals')
const Base = require('./base');

class ResultPage extends Base {

  get productTitlesAfterSearch() {
    return $$('.digi-product__label')[0];
  }

  get productTitleItemAfterSearch() {
    return $('.b-product-title__heading');
  }

  get productAuthorsAfterLeftFilter() {
    return $$('.product-card__subtitle')[0];
  }
}

module.exports = new ResultPage();