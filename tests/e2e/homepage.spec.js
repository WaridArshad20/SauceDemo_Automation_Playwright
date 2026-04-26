const {test, expect} = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const product = require('../../data/productData.json');

test('product_add_to_cart', async ({page}) => {
    const homePage = new HomePage(page)
    
    await homePage.gotoHomePage();
    await homePage.addToCart(product.bikelight.slug)
    await expect(homePage.cartCountLocator).toHaveText('1');
})