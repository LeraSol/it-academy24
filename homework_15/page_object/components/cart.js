const Base = require('../base')

class Cart extends Base {


  get firstGameButtonInCart() {
    return cy.get(`article:nth-child(1) button`);
  }

  get cartCount() {
    return cy.get(`#cart-count`);
  }

  addFirstGameInCart() {
    this.firstGameButtonInCart.click();
  }
}
module.exports = new Cart();