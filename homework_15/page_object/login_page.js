const Base = require('./base')

class LoginPage extends Base {

  get loginButton() {
    return cy.get('.user-bar__item .link.user-bar__item')
  }

  goLoginPage() {
    this.loginButton.click();
  }

  get getEmailButton() {
    return cy.get('#loginFormLoginEmailLink')
  }


  get getEntranceButton() {
    return cy.get('#loginForm > button')
  }

 get getErrorMessageAfterLogin() {
   return cy.get('.i-input-group__popover_visible > div')
 }

  goToAccountWithEmail() {
    this.getEmailButton.click()
  }

  clickEntranceButton(){
    this.getEntranceButton.click()
  }
}

module.exports = new LoginPage()