const { browser } = require('@wdio/globals')
class Base {
  async navigate(url) {
    await browser.url(url);
  }
}

module.exports = Base;