const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const users = require('./data/userData.json');


test('setup session', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standardUser.username, users.standardUser.password);
    console.log('Current URL after login:', page.url());

    await context.storageState({ path: 'auth.json' });

    console.log('auth.json saved!');
    await browser.close();
});