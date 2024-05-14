const { $, $$ } = require('@wdio/globals')
const Base = require('../base');

class Cart extends Base {

  async buttonInCartOnPage () {
    return $$('.product-card__button');
  }

  get cartCount() {
    return $(`#cart-count`);
  }

  async addItemInCart (numberItem) {
    await this.buttonInCartOnPage[numberItem].waitForClickable();
    await this.buttonInCartOnPage.click();
    await this.cartCount.waitForDisplayed();
  }
}

module.exports = new Cart();