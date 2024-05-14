const { $ } = require('@wdio/globals')
const Base = require('../base');

class Cart extends Base {

  get buttonInCartOnPage () {
    return $('article:nth-child(1) button')
  }

  get cartCount() {
    return $(`#cart-count`);
  }

  async addItemInCart () {
    await this.buttonInCartOnPage.waitForClickable();
    await this.buttonInCartOnPage.click();
    await this.cartCount.waitForDisplayed();
  }
}

module.exports = new Cart();