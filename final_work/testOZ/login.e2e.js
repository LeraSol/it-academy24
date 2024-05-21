const loginPage = require('../pageobjects/loginPage');
const { TEXT } = require('../helpers/constants');
const search = require('../pageobjects/components/search');

describe('Login tests', function() {

  beforeEach( async () =>{
    await search.navigate(TEXT.URL);
  });

  it('should be error message if we input wrong email and password', async () => {
    await loginPage.login(TEXT.EMAIL, TEXT.PASSWORD);
    expect (await loginPage.errorMessage.getText()).toContain(TEXT.ERROR_MESSAGE_INPUT_EMAIL_PASSWORD);
  });

  it('should be error message if we input wrong email and no password', async () => {
    await loginPage.login(TEXT.EMAIL);
    expect (await loginPage.errorMessage.getText()).toEqual(TEXT.ERROR_MESSAGE_INPUT_EMAIL);
  });

  it('should be error message if we input no email and wrong password', async () => {
    await loginPage.login("", TEXT.PASSWORD);
    expect (await loginPage.errorMessage.getText()).toEqual(TEXT.ERROR_MESSAGE_INPUT_PASSWORD);
  });

  it('should be error message if we input no email and no password', async () => {
    await loginPage.navigate(TEXT.URL);
    await loginPage.login();
    expect (await loginPage.errorMessage.getText()).toEqual(TEXT.ERROR_MESSAGE_NO_INPUT);
  });
})