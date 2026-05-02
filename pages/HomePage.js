class HomePage {
    constructor(page){
        this.page = page;
        this.homePageTitle = this.page.locator('[data-test="title"]');
        this.cartCountLocator = this.page.locator('[data-test="shopping-cart-badge"]');
        this.cart = this.page.locator('[data-test="shopping-cart-link"]');
        this.sortDropdown = this.page.locator('[data-test="product-sort-container"]')
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

    async sortBy(option){
        await this.sortDropdown.selectOption(option)
    }

    async getProductPrices(){
        const productPrices = await this.page.locator('[data-test="inventory-item-price"]').allTextContents();
        return productPrices.map(p => parseFloat(p.replace("$", "")));
    }

    async getProductTitles(){
        return await this.page.locator('[data-test="inventory-item-name"]').allTextContents();
    }

    
}

module.exports = { HomePage }