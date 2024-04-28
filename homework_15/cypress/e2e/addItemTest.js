const mainPage = require('../../page_object/main_page');
const leftNavMenu = require('../../page_object/components/leftNavMenu');
const sectionBooks = require('../../page_object/components/sectionBooks');

describe('Oz test', () => {
  it('should add first item in section Books to cart', () => {
    mainPage.navigate('https://oz.by/');
    leftNavMenu.goToPageByLeftNavMenu('Книги');
    sectionBooks.addFirstBookInCart()
    sectionBooks.cartCount.should('contain.text', '1')
  })
})