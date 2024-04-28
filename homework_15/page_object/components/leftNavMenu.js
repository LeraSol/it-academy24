const Base = require('../base')

class LeftNavMenu extends Base {

  get firstLevelMenuItem(itemName) {
    return cy.get(`//li[2]/a[contains(text(),'${itemName}')]`)
  }

  goToPageByLeftNavMenu(firstLevelItemName){
    this.firstLevelMenuItem(firstLevelItemName).click();
  }
}

module.exports = new LeftNavMenu();