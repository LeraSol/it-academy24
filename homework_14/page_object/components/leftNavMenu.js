const Base = require('../base')

class LeftNavMenu extends Base {
  constructor(page) {
    super(page);

  }
  async getFirstLevelMenuItem(itemName) {
    return this.page.locator(`//li[2]/a[contains(text(),'${itemName}')]`)
  }

  async goToPageByLeftNavMenu(firstLevelItemName){
    await (await this.getFirstLevelMenuItem(firstLevelItemName)).click();
  }
}

module.exports = LeftNavMenu;