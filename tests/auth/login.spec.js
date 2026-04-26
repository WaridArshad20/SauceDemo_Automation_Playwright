const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { HomePage } = require('../../pages/HomePage');
const users = require('../../data/userData.json');

// Login with valid credentials
test('login with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goto();
    await loginPage.login(users.standardUser.username, users.standardUser.password);

    // Assertion
    await expect(page).toHaveURL('/inventory.html');
    await expect(homePage.homePageTitle).toBeVisible();
    
    
})

// Login with Locked User
test('Login with Locked User', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);

    await expect(loginPage.error).toBeVisible();
})

// Login with valid username and incorrect password
test('Login with valid username and incorrect password', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.standardUser.username, users.invalidUser.password);

    await expect(loginPage.error).toBeVisible();
})

// Login with invalid username and correct password
test('login with invalid username and correct password', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.invalidUser.username, users.standardUser.password);

    await expect(loginPage.error).toBeVisible();
})

// Login with empty username and empty password
test('login with empty username and empty password', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();

    await expect(loginPage.error).toBeVisible();
})