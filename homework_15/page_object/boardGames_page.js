const Base = require('../base')

class boardGamesPage extends Base {

  get filterButton(){
    return cy.get('.top-filters__eselect__item.top-filters__viewer__open')
  }

  get priceCheapFirstFilter(){
    return cy.get('[href="https://oz.by/boardgames/?sort=price_asc"]')
  }

  get firstPrice(){
    return cy.get('article:nth-child(1) > div.product-card__body > div.product-card__cost')
  }

  get secondPrice(){
    return cy.get('article:nth-child(2) > div.product-card__body > div.product-card__cost')
  }

  goFilter(){
    this.filterButton.click()
  }

  goFilterByCheapPriceFirst(){
    this.priceCheapFirstFilter.click()
  }
}

module.exports = new boardGamesPage();
