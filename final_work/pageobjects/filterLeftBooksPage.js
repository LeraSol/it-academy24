const { $, $$ } = require('@wdio/globals')
const Base = require('./base');

class FilterLeftBooksPage extends Base {

  get filterByAuthor() {
    return $$(`//label[contains(@for,'id_people')]`);
  }

  get filterByYear() {
    return $$(`//label[contains(@for,'si1')]`);
  }

  get seeResultAfterLeftFilter() {
    return $('.dp-showresults__content');
  }

  get cleanFilterLeft(){
    return $$('.fm-clear-link.trash');
  }

  async goLeftFilterBy(selector) {
    await this.baseClick(selector);
    await this.seeResultAfterLeftFilter.moveTo();
    await this.baseClick(this.seeResultAfterLeftFilter);
  }

  async goCleanFilterLeft (selector, number) {
      await (await selector).moveTo();
      await (await this.cleanFilterLeft[number]).waitForDisplayed();
      await this.baseClick(await this.cleanFilterLeft[number]);
      await this.seeResultAfterLeftFilter.moveTo();
      await this.baseClick(this.seeResultAfterLeftFilter);
  }
}

module.exports = new FilterLeftBooksPage();