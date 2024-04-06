import { By, Builder, until } from 'selenium-webdriver';
import { expect } from 'chai';
describe('check the text of the main title "ChromeDriver"', function() {
  let driver;

  before(async () =>{
    driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().setSize({width:1960, height:1280})
  });

  after(async () => {
    await driver.quit();
  })

  it('should be title ChromeDriver', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    const checkTitle = await driver.findElement(By.css('.tyJCtd.mGzaTb.Depvyb.baZpAe.lkHyyc'));
    expect (await checkTitle.getText()).to.equal('ChromeDriver');
  })
})