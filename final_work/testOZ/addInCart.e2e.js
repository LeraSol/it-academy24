const menu = require('../pageobjects/components/menu');
const cart = require('../pageobjects/components/cart');
const { TEXT } = require('../helpers/constants');
const search = require('../pageobjects/components/search');

describe('Add in cart tests', function() {

  beforeEach( async () =>{
    await search.navigate(TEXT.URL);
  });

  it('add one item in first menu Books in cart', async () =>{
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOOKS);
    await cart.addItemInCart(0);
    expect (await cart.cartCount.getText()).toEqual("1");
  })

  it('add two items in second menu Boardgames > Квесты in cart', async () =>{
    await menu.goToPageByMenu(TEXT.FIRST_MENU_BOARDGAMES, TEXT.SECOND_MENU_BOARDGAMES);
    await cart.addItemInCart(0);
    await cart.addItemInCart(1);
    expect (await cart.cartCount.getText()).toEqual("2");
  })
})