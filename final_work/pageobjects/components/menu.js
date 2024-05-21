const { $ } = require('@wdio/globals')
const Base = require('../base');

class Menu extends Base {

  async getFirstMenuItem (name) {
    return $(`.main-nav__list__item[href='/${name}/']`);
  }

  async getSecondMenuItem (name) {
    return $(`//a[contains(text(),'${name}')]`);
  }

  get headerMenu () {
    return $(`.main-nav__header`);
  }

  async goToPageByMenu (firstLevelItemName, secondLevelItemName) {
    if (await (await this.headerMenu).isDisplayed()){
      await (await this.headerMenu).moveTo();
    }
    await (await this.getFirstMenuItem(firstLevelItemName)).moveTo();
    if(await (await this.getSecondMenuItem(secondLevelItemName)).isDisplayed()) {
      await this.baseClick(await this.getSecondMenuItem(secondLevelItemName));
    }
    else {
      await this.baseClick(await this.getFirstMenuItem(firstLevelItemName));
    }
  }
}

module.exports= new Menu();