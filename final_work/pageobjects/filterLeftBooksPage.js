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

  async goLeftFilterByAuthor() {
    await this.filterByAuthor[0].click();
    await this.seeResultAfterLeftFilter.moveTo();
    await this.seeResultAfterLeftFilter.waitForDisplayed();
    await this.seeResultAfterLeftFilter.click();
  }

  async goLeftFilterByYear() {
    await this.filterByYear[0].click();
    await this.seeResultAfterLeftFilter.moveTo();
    await this.seeResultAfterLeftFilter.waitForDisplayed();
    await this.seeResultAfterLeftFilter.click();
  }

  async goLeftFilterByAuthorAndYear() {
    await this.filterByAuthor[0].click();
    await this.filterByYear[0].click();
    await this.seeResultAfterLeftFilter.moveTo();
    await this.seeResultAfterLeftFilter.waitForDisplayed();
    await this.seeResultAfterLeftFilter.click();
  }

  async goCleanFilterLeftAuthor () {
    await this.filterByAuthor[0].moveTo();
    await this.cleanFilterLeft[0].waitForClickable();
    await this.cleanFilterLeft[0].click();
    await this.seeResultAfterLeftFilter.moveTo();
    await this.seeResultAfterLeftFilter.waitForDisplayed();
    await this.seeResultAfterLeftFilter.click();

  }

  async goCleanFilterLeftYear () {
    await this.filterByYear[0].moveTo();
    await this.cleanFilterLeft[1].waitForClickable();
    await this.cleanFilterLeft[1].click();
    await this.seeResultAfterLeftFilter.moveTo();
    await this.seeResultAfterLeftFilter.waitForDisplayed();
    await this.seeResultAfterLeftFilter.click();
  }

  async goCleanFilterLeftAuthorAndYear () {
    await this.filterByAuthor[0].moveTo();
    await this.cleanFilterLeft[0].waitForDisplayed();
    await this.cleanFilterLeft[0].click();
    await this.filterByYear[0].moveTo();
    await this.cleanFilterLeft[1].waitForClickable();
    await this.cleanFilterLeft[1].click();
    await this.seeResultAfterLeftFilter.moveTo();
    await this.seeResultAfterLeftFilter.waitForDisplayed();
    await this.seeResultAfterLeftFilter.click();
  }
}

module.exports = new FilterLeftBooksPage();