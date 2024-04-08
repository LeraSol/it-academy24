const mainPage = require('../pageobjects/mainPage');

describe('Mocha BACKERS test', function () {
  [
    { value: 'rushradar', result: 'RushRadar' },
    { value: 'codefirst', result: 'CodeFirst' },
    { value: 'windesol', result: 'Sähkön kilpailutus' },
    { value: 'greenpromocode', result: 'GreenPromoCode' },
  ].forEach(testData => {
    it(`should go to ${testData.value} in BACKERS`, async () => {
      await mainPage.navigate('https://mochajs.org/');
      await mainPage.gotoSuggestBackersByName(testData.value);
      await browser.switchWindow(testData.result);
      expect(await browser.getTitle()).toContain(testData.result);
    });
  });
});
