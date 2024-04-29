const mainPage = require('../../page_object/main_page');
const leftNavMenu = require('../../page_object/components/leftNavMenu');
const { TEXT } = require('../../cypress/helpers/constants');


describe('Oz test', () => {
  it('section name in menu should be visible', () => {
    mainPage.navigate('https://oz.by/');
    leftNavMenu.firstLevelMenuItem(TEXT.MENU_CATEGORIES_FIRST_LEVEL);
    leftNavMenu.secondLevelMenuItem(TEXT.MENU_CATEGORIES_SECOND_LEVEL).should('be.visible');
  })
})