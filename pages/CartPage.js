class CartPage {
    constructor(page){
        this.page = page;
        this.cartTitle = this.page.locator('[data-test="title"]');
        this.cartProductName = this.page.locator('[data-test="inventory-item-name"]')
        this.checkoutbtn = this.page.locator('[data-test="checkout"]');
    }

    async removeFromCart(productName){
        await this.page.locator(`[data-test="remove-${productName}]`).click();
    }
}

module.exports = { CartPage };