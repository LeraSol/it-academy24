const Base = require('../base')

class Search extends Base {

  get searchField() {
    return cy.get(`#top-s`);
  }

  get searchCategories() {
    return cy.get('span.digi-ac-category__name')
  }

  searchByCategories(text, categoriesNumber = 0) {
    this.searchField.type(text)
    this.searchCategories.eq(categoriesNumber).click()
  }
}

module.exports = new Search();