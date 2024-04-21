const Base = require('./base');

class LoginPage extends Base {

  constructor(page) {
    super(page);
  }

  async getEmailButton() {
    return this.page.locator(`#loginFormLoginEmailLink`);
  }

  async getEmailInput() {
    return this.page.locator(`.i-input-group__cell input[placeholder=\'Электронная почта\']`);
  }

  async getPasswordInput() {
    return this.page.locator(`.i-input-group__cell input[placeholder=\'Пароль\']`);
  }

  async getEntranceButton() {
    return this.page.locator(`#loginForm > button`);
  }

  async getErrorMessageAfterLogin() {
    return this.page.locator(`.i-input-group__popover_visible > div`);
  }

  async goToAccountWithEmail(){
    await (await this.getEmailButton()).click();
  }

  async enterEmail(email){
    await (await this.getEmailInput()).click();
    await (await this.getEmailInput()).fill(email);
  }

  async enterPassword(password){
    await (await this.getPasswordInput()).click();
    await (await this.getPasswordInput()).fill(password);
  }

  async goToAccountAfterEmailPasswordEnter(){
    await (await this.getEntranceButton()).click();
    await (await this.getEntranceButton()).click();
  }

}

module.exports = LoginPage;