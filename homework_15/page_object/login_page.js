const Base = require('./base')

class LoginPage extends Base {



  get getEmailButton() {
    return cy.get('#loginFormLoginEmailLink')
  }

  get getEmailInput() {
    return cy.get('.i-input-group__cell input[placeholder=\'Электронная почта\']')
  }

  get getPasswordInput() {
    return cy.get('.i-input-group__cell input[placeholder=\'Пароль\']')
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

  enterEmail(email) {
    this.getEmailInput.click().get('input').type(email)
  }

  enterPassword(password) {
    this.getPasswordInput.click().get('input').type(password)
  }

  goToAccountAfterEmailPasswordEnter(){
    this.getEntranceButton.dblclick()
  }
}

module.exports = new LoginPage()