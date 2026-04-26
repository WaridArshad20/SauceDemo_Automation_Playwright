class CheckoutCompletePage{
    constructor(page){
        this.page = page;
        this.orderSuccessMsg = this.page.locator('[data-test="complete-header"]');
        this.backhomeBtn = this.page.locator('[data-test="back-to-products"]')
    }
}

module.exports = { CheckoutCompletePage }