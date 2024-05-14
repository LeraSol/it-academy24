const { $ } = require('@wdio/globals')
const Base = require('./base');

class LoginPage extends Base {

    get loginButton () {
        return $('.user-bar__item .link.user-bar__item');
    }

    get emailButton () {
        return $('#loginFormLoginEmailLink');
    }

    get inputUsername () {
        return $('.i-input-group__cell input[placeholder=\'Электронная почта\']');
    }

    get inputPassword () {
        return $('.i-input-group__cell input[placeholder=\'Пароль\']');
    }

    get btnLogin () {
        return $('#loginForm > button');
    }

    get errorMessage () {
        return $('.i-input-group__popover_visible > div');
    }

    async login (username="", password="") {
        await this.loginButton.click();
        await this.emailButton.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage();
