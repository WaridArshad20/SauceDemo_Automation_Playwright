class YourInformationPage {
    constructor(page){
        this.page = page;
        this.pageTitle = this.page.locator('[data-test="title"]');
        this.firstName = this.page.locator('[data-test="firstName"]');
        this.lastName = this.page.locator('[data-test="lastName"]');
        this.postalCode = this.page.locator('[data-test="postalCode"]');
        this.continueBtn = this.page.locator('[data-test="continue"]');
    }

    async fillCheckoutForm(fname, lname, postalcode){
        await this.firstName.fill(fname);
        await this.lastName.fill(lname);
        await this.postalCode.fill(postalcode)
    }
}


module.exports = { YourInformationPage };