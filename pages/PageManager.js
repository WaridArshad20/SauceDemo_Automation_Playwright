const { CartPage } = require("./CartPage");
const { CheckoutCompletePage } = require("./CheckoutCompletePage");
const { CheckoutOverviewPage } = require("./CheckoutOverviewPage");
const { HomePage } = require("./HomePage");
const { YourInformationPage } = require("./YourInformationPage");
const { LoginPage } = require('./LoginPage');

class PageManager {
    constructor(page){
        this.loginPage = new LoginPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutCompletePage = new CheckoutCompletePage(page);
        this.checkoutOverviewPage = new CheckoutOverviewPage(page);
        this.homePage = new HomePage(page);
        this.yourInformationPage = new YourInformationPage(page);
    }
}

module.exports = { PageManager }