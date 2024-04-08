const mainPage = require('../pageobjects/mainPage')
describe('Mocha TABLE OF CONTENT test', function() {

  ([
      {value: 'Installation', result:'#installation'},
      {value: 'Hooks', result:'#hooks'},
      {value: 'Reporters', result:'#reporters'},
      {value: 'Error Codes', result:`#error-codes`}
    ]
  ).forEach(testData => {
    it(`should go to ${testData.value} in TABLE OF CONTENT`, async () => {
      await mainPage.navigate('https://mochajs.org/');
      await mainPage.gotoSuggestTableOfContentsByName(testData.value);
      const feature = await mainPage.getSuggestTableOfContentsByName(testData.value);
      expect (await feature.getUrl()).toContain(testData.result)
    });
  });
})