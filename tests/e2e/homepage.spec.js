const { test } = require('../../fixtures/base')
const { expect } = require('@playwright/test');
const product = require('../../data/productData.json');

test('product_add_to_cart', async ({pm}) => {
    
    await pm.homePage.gotoHomePage();
    await pm.homePage.addToCart(product.bikelight.slug)
    await expect(pm.homePage.cartCountLocator).toHaveText('1');
})