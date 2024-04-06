import { By, Builder, until } from 'selenium-webdriver';
import { expect } from 'chai';
describe('check that the new title has become "Chrome Extensions"', function() {
  let driver;

  before(async () => {
    driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().setSize({ width: 1960, height: 1280 })
  });

  after(async () => {
    await driver.quit();
  })

  it('should be title Chrome Extensions', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    const divChromeExtens = await driver.findElement(By.css('li:nth-child(3) .PsKE7e.qV4dIc'));
    await divChromeExtens.click();
    const spanChromeExtens = await driver.findElement(By.css('.CDt4Ke .Rn3Z1b'));
    driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", spanChromeExtens);
    expect(await spanChromeExtens.getText()).to.equal('Chrome Extensions')
  });
})