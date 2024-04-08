const Base = require('./base');

class MainPage extends Base {
  async getSuggestBackersByName(backersName) {
    return $(`//*[@id="backers"]//a[contains(@href,'${backersName}')]`);
  }
  async getSuggestFeatureByName(featureName) {
    return $(`//*[contains(text(),'${featureName}')]`);
  }

  async getSuggestTableOfContentsByName(tableOfContents) {
    return $(`//*[@id="content"]//a[contains(text(),'${tableOfContents}')]`);
  }
  async gotoSuggestFeatureByName(featureName) {
    await (await this.getSuggestFeatureByName(featureName)).waitForDisplayed();
    await (await this.getSuggestFeatureByName(featureName)).click();
  }

  async gotoSuggestTableOfContentsByName(tableOfContents) {
    await (await this.getSuggestTableOfContentsByName(tableOfContents)).waitForDisplayed();
    await (await this.getSuggestTableOfContentsByName(tableOfContents)).click();
  }

  async gotoSuggestBackersByName(backersName) {
    await (await this.getSuggestBackersByName(backersName)).waitForDisplayed();
    await (await this.getSuggestBackersByName(backersName)).click();
  }
}

module.exports = new MainPage();
