import type {Config, PlaywrightTestOptions, PlaywrightWorkerOptions} from '@playwright/test'

const outDir = `out/tests/${process.platform}`

const config: Config<PlaywrightWorkerOptions & PlaywrightTestOptions> = {
    testDir: 'tests',
    reporter: 'list',
    projects: [
        {
            name: 'electron',
            use: {
                browserName: 'chromium',
            },
            metadata: {
                platform: process.platform,
                headful: true,
                browserName: 'electron',
                channel: undefined,
                mode: 'default',
                video: false,
            },
        },
    ],
}

export default config