class LoginPage {

    constructor(page){
        this.page = page;
        this.userName = this.page.locator('[data-test="username"]');
        this.password = this.page.locator('[data-test="password"]');
        this.loginBtn = this.page.locator('[data-test="login-button"]');
        this.error = this.page.locator('[data-test="error"]');
    }

    async goto(){
        await this.page.goto('/');
    }

    async login(userName = '', password = ''){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}


module.exports = { LoginPage }