const mainPage = require('../../page_object/main_page');
const mainMenu = require('../../page_object/components/mainMenu');
const cart = require('../../page_object/components/cart');

describe('Oz test', () => {
  it.skip('should add first item in section Board Games to cart', () => {
    mainPage.navigate('https://oz.by/');
    mainMenu.goToBoardGamesPage();
    cart.addFirstGameInCart()
    cart.cartCount.should('contain.text', '1')
  })
})
