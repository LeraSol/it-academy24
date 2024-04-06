import { By, Builder, until } from 'selenium-webdriver';
import { expect } from 'chai';
describe('Check that the url contains /mobile-emulation', function() {
  let driver;

  before(async () =>{
    driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().setSize({width:1960, height:1280})
  });

  after(async () => {
    await driver.quit();
  })

  it('should url in addition>mobile emulation have /mobile-emulation', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    const addition = await driver.findElement(By.css('.VsJjtf.oXBWEc'));
    await addition.click();
    await driver.wait(until.elementLocated(By.css('div.oGuwee li:nth-child(9) a')));
    const mobileEmulation = await driver.findElement(By.css('div.oGuwee li:nth-child(9) a'));
    await mobileEmulation.click();
    expect (await driver.getCurrentUrl()).to.include('/mobile-emulation');
  });
})