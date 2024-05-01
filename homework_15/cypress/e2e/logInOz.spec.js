const mainPage = require('../../page_object/main_page');
const loginPage = require('../../page_object/login_page');
const { TEXT } = require('../../cypress/helpers/constants');

describe('Oz test', () => {
  it.skip('should have error text when go to login page without email ', () => {
    mainPage.navigate('https://oz.by/');
    loginPage.goLoginPage();
    loginPage.goToAccountWithEmail();
    loginPage.clickEntranceButton();
    loginPage.getErrorMessageAfterLogin.should('contain.text', TEXT.ERROR_MESSAGE_AFTER_LOGIN)
  })
})