const mainPage = require('../../page_object/main_page');
const leftNavMenu = require('../../page_object/components/leftNavMenu');
const cart = require('../../page_object/components/cart');
const { TEXT } = require('../../cypress/helpers/constants');

describe('Oz test', () => {
  it('should add first item in section Books to cart', () => {
    mainPage.navigate('https://oz.by/');
    leftNavMenu.goToPageByLeftNavMenu(TEXT.MENU_CATEGORIES_FIRST_LEVEL);
    cart.addFirstBookInCart()
    cart.cartCount.should('contain.text', '1')
  })
})