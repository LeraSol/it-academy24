const mainPage = require('../../page_object/main_page');
const loginPage = require('../../page_object/login_page');
const { TEXT } = require('../../cypress/helpers/constants');

describe('Oz test', () => {
  it('should have error text when go to login page with error email ', () => {
    mainPage.navigate('https://oz.by/');
    loginPage.goLoginPage();
    loginPage.goToAccountWithEmail();
    loginPage.enterEmail(TEXT.EMAIL);
    loginPage.enterPassword(TEXT.PASSWORD);
    loginPage.goToAccountAfterEmailPasswordEnter();
    loginPage.getErrorMessageAfterLogin.should('contain.text', TEXT.ERROR_MESSAGE_AFTER_LOGIN)
  })
})