const { test, expect } = require('@playwright/test');
const products = require('../../data/productData.json');
const user = require('../../data/userData.json');
const { PageManager } = require('../../pages/PageManager')

test('E2E flow', async({page}) => {
    const pm = new PageManager(page) 

    // Login from Session Storage

    // Product Add to Cart
    await pm.homePage.gotoHomePage();
    await pm.homePage.addToCart(products.bikelight.slug);

    // validate cart count increases
    await expect(pm.homePage.cartCountLocator).toHaveText('1');

    // click on cart icon
    await pm.homePage.cart.click();

    // Verify if cart page open
    await expect(pm.cartPage.cartTitle).toBeVisible();

    await expect(pm.cartPage.cartProductName).toHaveText(products.bikelight.name)
    
    // Checkout
    await pm.cartPage.checkoutbtn.click();

    // Validate if information page is open
    await expect(pm.yourInformationPage.pageTitle).toBeVisible();

    // Fill information form
    await pm.yourInformationPage.fillCheckoutForm
    (user.standardUser.firstname, user.standardUser.lastname, user.standardUser.postalcode);
    await pm.yourInformationPage.continueBtn.click();

    // validate product title on over view page
    await expect(pm.checkoutOverviewPage.productTitle).toHaveText(products.bikelight.name);

    // clicking on finish button
    await pm.checkoutOverviewPage.finishBtn.click();

    // Validate order success message
    await expect(pm.checkoutCompletePage.orderSuccessMsg).toBeVisible();
    await pm.checkoutCompletePage.backhomeBtn.click();
})  