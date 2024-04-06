import { By, Builder, until } from 'selenium-webdriver';
import { expect } from 'chai';
describe('Check that the first link contains the world driver', function() {
  let driver;

  before(async () =>{
    driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().setSize({width:1960, height:1280})
  });

  after(async () => {
    await driver.quit();
  })

  it('should first link have world driver after search driver', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    const enterSearch = await driver.findElement(By.css('.tCHXDc.YSH9J'));
    await enterSearch.click();
    await driver.wait(until.elementLocated(By.css('.whsOnd.zHQkBf')));
    const writeWorld = await driver.findElement(By.css('.whsOnd.zHQkBf'));
    await writeWorld.sendKeys('driver\n');
    await driver.wait(until.elementLocated(By.css('div:nth-child(1) >div  > a')));
    const textInSearch = await driver.findElement(By.css('div:nth-child(1) >div  > a'));
    expect (await textInSearch.getAttribute("href")).to.include('driver');
  });
})