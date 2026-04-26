class CheckoutOverviewPage {
    constructor(page){
        this.page = page;
        this.productTitle = this.page.locator('[data-test="inventory-item-name"]');
        this.finishBtn = this.page.locator('[data-test="finish"]');
    }
}

module.exports = { CheckoutOverviewPage }