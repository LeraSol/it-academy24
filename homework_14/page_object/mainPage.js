const Base = require('./base');

class MainPage extends Base {

  constructor(page) {
    super(page);
  }

  async getSearchButton() {
    return this.page.locator(`#top-s`);
  }

  async getLoginButton() {
    return this.page.locator(`.user-bar__item .link.user-bar__item`);
  }

  async getFirstItemNameAfterSearch(itemName) {
    return this.page.locator(`//div[1]/div/div[2]/a[contains(text(),'${itemName}')]`);
  }

  async goLoginAccount(){
    await (await this.getLoginButton()).click();
  }

  async goToSearchItemName(itemName){
    await (await this.getSearchButton()).click();
    await (await this.getSearchButton()).fill(itemName);
    await (await this.page.keyboard.press('Enter'));
    await (await this.getFirstItemNameAfterSearch(itemName)).isVisible();
  }

}

module.exports = MainPage;