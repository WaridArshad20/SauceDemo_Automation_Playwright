const { test } = require('../../fixtures/base')
const { expect } = require('@playwright/test');
const product = require('../../data/productData.json');

test.beforeEach (async ({pm}) => {
    await pm.homePage.gotoHomePage();
})

test('product_add_to_cart', async ({pm}) => {
    await pm.homePage.addToCart(product.bikelight.slug)
    await expect(pm.homePage.cartCountLocator).toHaveText('1');
})

test('sort products by price low to high', async({pm}) => {
    await pm.homePage.sortBy(product.sortOptions.lowToHigh);
    const productPrices = await pm.homePage.getProductPrices();
    // const sorted = [...productPrices].sort((a,b) => a-b);
    for(let i=0; i< productPrices.length -1; i++){
        expect(productPrices[i] <= productPrices[i+1]).toBeTruthy();
    }
})

test('sort products by price high to low', async ({pm}) => {
    await pm.homePage.sortBy(product.sortOptions.highToLow);
    const productPrices = await pm.homePage.getProductPrices();
    const sorted = [...productPrices].sort((a,b) => b-a);
    expect(productPrices).toEqual(sorted);
})

test('sort product by alphabatically a-z', async({ pm, page}) => {
    await pm.homePage.sortBy(product.sortOptions.nameAtoZ);
    await page.pause();
    const productTitles = await pm.homePage.getProductTitles();
    const sorted = [...productTitles].sort((a, b) => a.localeCompare(b));
    expect(productTitles).toEqual(sorted);
})

test('sort product by alphabatically z-a', async({pm, page}) => {
    await pm.homePage.sortBy(product.sortOptions.nameZtoA);
    const productTitles = await pm.homePage.getProductTitles();
    const sorted = [...productTitles].sort((a,b) => b.localeCompare(a));
    expect(productTitles).toEqual(sorted)
})