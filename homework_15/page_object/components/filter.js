const Base = require('../base')

class Filter extends Base {


  get filterButton() {
    return cy.get('.top-filters__eselect__item.top-filters__viewer__open')
  }

  get priceCheapFirstFilter() {
    return cy.get('[href="https://oz.by/boardgames/?sort=price_asc"]')
  }

  goFilter() {
    this.filterButton.click()
  }

  goFilterByCheapPriceFirst() {
    this.priceCheapFirstFilter.click()
  }


}
module.exports = new Filter();