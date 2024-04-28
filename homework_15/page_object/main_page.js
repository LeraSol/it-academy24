const Base = require('./base')

class MainPage extends Base {

  get loginButton() {
    return cy.get('.user-bar__item .link.user-bar__item')
  }

  goLoginPage() {
    this.loginButton.click();
  }



}

module.exports = new MainPage();