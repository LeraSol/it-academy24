const mainPage = require('../../page_object/main_page');
const loginPage = require('../../page_object/login_page');

describe('Oz test', () => {
  it('should have error text when go to login page with error email ', () => {
    mainPage.navigate('https://oz.by/');
    mainPage.goLoginPage();
    loginPage.goToAccountWithEmail();
    loginPage.enterEmail('lera.korenkova@list.ru');
    loginPage.enterPassword('123456789');
    loginPage.goToAccountAfterEmailPasswordEnter();
    loginPage.getErrorMessageAfterLogin.should('contain.text', 'Адрес электронной почты не зарегистрирован')
  })
})