const { $, $$ } = require('@wdio/globals')
const Base = require('../base');

class Cart extends Base {

  get buttonInCartOnPage () {
    return $$('.product-card__button');
  }

  get cartCount() {
    return $(`#cart-count`);
  }

  async addItemInCart (numberItem) {
    await this.buttonInCartOnPage[0].waitForClickable();
    await this.buttonInCartOnPage[numberItem].click();
    await this.cartCount.waitForDisplayed();
  }
}

module.exports = new Cart();