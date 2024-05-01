const mainPage = require('../../page_object/main_page')
const mainMenu = require('../../page_object/components/mainMenu')
const filter = require('../../page_object/components/filter')
const {TEXT} = require('../helpers/constants')

describe('Oz test', () => {
  it('should filter by cheap price', () => {
    mainPage.navigate('https://oz.by/')
    mainMenu.goToBoardGamesPage()
    filter.goFilter()
    filter.goFilterByCheapPriceFirst()
    cy.url().should('include', TEXT.URL_FILTER_BY_PRICE)
  });
})