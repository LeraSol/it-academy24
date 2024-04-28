const Base = require('../base')

class SectionBooks extends Base {

  get firstBookButtonInCart() {
    return cy.get(`article:nth-child(1) div.product-card__footer`);
  }

  get cartCount() {
    return cy.get(`#cart-count`);
  }

  addFirstBookInCart(){
    this.firstBookButtonInCart.click();
  }
}

module.exports = new SectionBooks();
