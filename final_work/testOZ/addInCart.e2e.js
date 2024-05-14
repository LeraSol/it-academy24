const menu = require('../pageobjects/components/menu');
const cart = require('../pageobjects/components/cart');
const { TEXT } = require('../helpers/constants');

describe('Add in cart tests', function() {

  it('add item in first menu Books in cart', async () =>{
    await menu.navigate(TEXT.URL);
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await cart.addItemInCart();
    expect (await cart.cartCount.getText()).toEqual("1");
  })

  it('add item in second menu Boardgames > Квесты in cart', async () =>{
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOARDGAMES, TEXT.SECOND_MENU_BOARDGAMES);
    await cart.addItemInCart();
    expect (await cart.cartCount.getText()).toEqual("2");
  })
})