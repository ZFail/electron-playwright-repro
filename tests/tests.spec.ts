import {expect, test} from './fixture'

test('check initial state', async ({window}) => {
    expect(await window.title()).toContain('Hello World!')
    await expect(window.locator('h1')).toBeVisible()
})
