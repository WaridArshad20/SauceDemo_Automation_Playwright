const { test, expect } = require('@playwright/test');
const products = require('../../data/productData.json');
const user = require('../../data/userData.json');
const { CartPage } = require('../../pages/CartPage');
const { HomePage } = require('../../pages/HomePage');
const { YourInformationPage } = require('../../pages/YourInformationPage');
const { CheckoutOverviewPage } = require('../../pages/CheckoutOverviewPage');
const { CheckoutCompletePage } = require('../../pages/CheckoutCompletePage');

test.only('E2E flow', async({page}) => {
    const homePage = new HomePage(page)
    const cartPage = new CartPage(page)
    const yourInformationPage = new YourInformationPage(page)
    const checkoutOverviewPage = new CheckoutOverviewPage(page)
    const checkoutCompletePage = new CheckoutCompletePage(page)
    
    // Login from Session Storage

    // Product Add to Cart
    await homePage.gotoHomePage();
    await homePage.addToCart(products.bikelight.slug);

    // validate if cart count increases
    await expect(homePage.cartCountLocator).toHaveText('1');

    // click on cart icon
    await homePage.cart.click();

    // Verify if cart page open
    await expect(cartPage.cartTitle).toBeVisible();

    await expect(cartPage.cartProductName).toHaveText(products.bikelight.name)
    
    // Checkout
    await cartPage.checkoutbtn.click();

    // Validate if information page is open
    await expect(yourInformationPage.pageTitle).toBeVisible();

    // Fill information form
    await yourInformationPage.fillCheckoutForm
    (user.standardUser.firstname, user.standardUser.lastname, user.standardUser.postalcode);
    await yourInformationPage.continueBtn.click();

    // validate product title on over view page
    await expect(checkoutOverviewPage.productTitle).toHaveText(products.bikelight.name);

    // clicking on finish button
    await checkoutOverviewPage.finishBtn.click();

    // Validate order success message
    await expect(checkoutCompletePage.orderSuccessMsg).toBeVisible();
    await checkoutCompletePage.backhomeBtn.click();
})  