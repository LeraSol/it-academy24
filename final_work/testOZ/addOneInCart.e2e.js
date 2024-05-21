const menu = require('../pageobjects/components/menu');
const cart = require('../pageobjects/components/cart');
const { TEXT } = require('../helpers/constants');
const search = require('../pageobjects/components/search');

describe('Add in cart tests', function() {

  it('add one item in cart', async () =>{
    await search.navigate(TEXT.URL);
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await cart.addItemInCart(0);
    expect (await cart.cartCount.getText()).toEqual("1");
  });
})