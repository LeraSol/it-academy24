const { test, expect } = require('@playwright/test');
const MainPage = require('../page_object/mainPage');
const LoginPage = require('../page_object/loginPage');

test.describe('oz test', async function () {
  let mainPage;
  let loginPage;

  test.beforeEach(async ({page, context}) => {
    mainPage = new MainPage(page);
    loginPage = new LoginPage(page);
  });

  test('should go to account with error email', async ({page}) => {
    await mainPage.navigate('https://oz.by/');
    await mainPage.goLoginAccount();
    await loginPage.goToAccountWithEmail();
    await loginPage.enterEmail('lera.korenkova@list.ru');
    await loginPage.enterPassword('123456');
    await loginPage.goToAccountAfterEmailPasswordEnter();
    const textLogin = await loginPage.getErrorMessageAfterLogin();
    await textLogin.isVisible();
    await expect(await textLogin.textContent()).toContain('Адрес электронной почты не зарегистрирован');
  })
});