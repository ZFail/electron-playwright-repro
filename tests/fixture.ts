import {test as base} from '@playwright/test'
export {expect} from '@playwright/test'

export const test = base.extend({
    electronApp: async ({playwright}, run, testInfo) => {
        const electronApp = await playwright._electron.launch({
            args: ['.']
        })
        await run(electronApp)
        await electronApp.close()
    },

    window: async ({electronApp}, run, testInfo) => {
        const window = await electronApp.firstWindow()
        await run(window)
    },
})