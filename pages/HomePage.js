class HomePage {
    constructor(page){
        this.page = page;
        this.homePageTitle = this.page.locator('[data-test="title"]');
        this.cartCountLocator = this.page.locator('[data-test="shopping-cart-badge"]');
        this.cart = this.page.locator('[data-test="shopping-cart-link"]');

    }

    async gotoHomePage(){
        await this.page.goto('/inventory.html')
    }

    async addToCart(producutName){
        await this.page.locator(`[data-test="add-to-cart-${producutName}"]`).click();
    }

    async clickOnCart(){
        await this.cart.click();
    }
}

module.exports = { HomePage }