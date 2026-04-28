const {test: base} = require('@playwright/test');
const { PageManager } = require('../pages/PageManager')

const test = base.extend({
    pm: async ({page}, use) => {
        const pm = new PageManager(page);
        await use(pm)
    }
})

module.exports = { test }