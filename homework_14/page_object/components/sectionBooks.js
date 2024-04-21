const Base = require('../base')

class SectionBooks extends Base {
  constructor(page) {
    super(page);
  }

  async getNameOfPageCategory(categoryName) {
    return this.page.locator(`//h1[contains(text(),'${categoryName}')]`);
  }

  async getFirstBookButtonInCart() {
    return this.page.locator(`//article[1]/div[3]/form/button`);
  }

  async getCartCount() {
    return this.page.locator(`#cart-count`);
  }

  async addFirstBookInCart(){
  await (await this.getFirstBookButtonInCart()).click();
  }

  async isVisibleCartCount(){
    await (await this.getCartCount()).isVisible();
  }

  async isVisibleNamePage(categoryName){
    await (await this.getNameOfPageCategory(categoryName)).isVisible();
  }
}

module.exports = SectionBooks;