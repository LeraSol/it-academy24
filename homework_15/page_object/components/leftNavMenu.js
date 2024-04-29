const Base = require('../base')

class LeftNavMenu extends Base {

  get firstLevelMenuItem(itemName) {
    return cy.get(`.main-nav__list__li_wnav [href='/${itemName}/']`)
  }

  get secondLevelMenuItem(itemName) {
    return cy.get(`//a[contains(@class,'menu-link-action') and text()='${itemName} ']`)
  }

  goToPageByLeftNavMenu(){
    this.firstLevelMenuItem.click();
  }
}

module.exports = new LeftNavMenu();