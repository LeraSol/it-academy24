const menu = require('../pageobjects/components/menu');
const cart = require('../pageobjects/components/cart');
const { TEXT } = require('../helpers/constants');
const search = require('../pageobjects/components/search');

describe('Add in cart tests', function() {

  it('add two items in cart', async () =>{
    await search.navigate(TEXT.URL);
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOARDGAMES, TEXT.SECOND_MENU_BOARDGAMES);
    await cart.addItemInCart(0);
    await cart.addItemInCart(1);
    expect (await cart.cartCount.getText()).toEqual("2");
  });
})