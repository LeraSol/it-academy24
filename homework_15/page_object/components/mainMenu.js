const Base = require('../base')

class MainMenu extends Base {

  get boardGamesItem(){
    return cy.get('.main-nav__list__item[href=\'/boardgames/\']')
  }

  goToBoardGamesPage(){
    this.boardGamesItem.click()
  }

}

module.exports = new MainMenu();