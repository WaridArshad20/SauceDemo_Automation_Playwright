const {test, expect} = require('@playwright/test');
const { PageManager } = require('../../pages/PageManager');
const users = require('../../data/userData.json');

// Login with valid credentials
test('login with valid credentials', async ({page}) => {
    const pm = new PageManager(page);

    await pm.loginPage.goto();
    await pm.loginPage.login(users.standardUser.username, users.standardUser.password);

    // Assertion
    await expect(page).toHaveURL('/inventory.html');
    await expect(pm.homePage.homePageTitle).toBeVisible();
    
    
})

// Login with Locked User
test('Login with Locked User', async ({page}) => {
    const pm = new PageManager(page);
    await pm.loginPage.goto();
    await pm.loginPage.login(users.lockedUser.username, users.lockedUser.password);

    await expect(pm.loginPage.error).toBeVisible();
})

// Login with valid username and incorrect password
test('Login with valid username and incorrect password', async ({page}) => {
    const pm = new PageManager(page);
    await pm.loginPage.goto();
    await pm.loginPage.login(users.standardUser.username, users.invalidUser.password);

    await expect(pm.loginPage.error).toBeVisible();
})

// Login with invalid username and correct password
test('login with invalid username and correct password', async ({page}) => {
    const pm = new PageManager(page);
    await pm.loginPage.goto();
    await pm.loginPage.login(users.invalidUser.username, users.standardUser.password);

    await expect(pm.loginPage.error).toBeVisible();
})

// Login with empty username and empty password
test('login with empty username and empty password', async({page}) => {
    const pm = new PageManager(page);
    await pm.loginPage.goto();
    await pm.loginPage.login();

    await expect(pm.loginPage.error).toBeVisible();
})