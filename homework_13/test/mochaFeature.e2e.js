const mainPage = require('../pageobjects/mainPage')
describe('Mocha FEATURE test', function() {

  ([
      {value: 'browser support', result:'#running-mocha-in-the-browser'},
      {value: 'TextMate bundle', result:'#textmate'},
      {value: 'config file support', result:'#-config-path'},
      {value: 'test coverage reporting', result:'#wallabyjs'}
    ]
  ).forEach(testData => {
    it(`should go to ${testData.value} in FEATURE`, async () => {
      await mainPage.navigate('https://mochajs.org/');
      await mainPage.gotoSuggestFeatureByName(testData.value);
      const feature = await mainPage.getSuggestFeatureByName(testData.value);
      expect (await feature.getUrl()).toContain(testData.result)
    });
  });
})