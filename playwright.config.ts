import { PlaywrightTestConfig, devices } from '@playwright/test';
import * as qaTestData from './src/config/qa.json';
import * as sboxTestData from './src/config/sbox.json';

// Config to accommodate extra properties
interface TestConfig extends PlaywrightTestConfig {
  env: string,
  baseUrl: string,
  login: { username: string; password: string; }
}

// get the environment type from command line. If none, set it to qa
const environment = process.env.TEST_ENV || 'qa';

/**
 * |**********************************|
 * | Support for multiple environments|
 * |**********************************|
 */

// set config for qa
const qaConfig: TestConfig = {
  env: qaTestData.env,
  baseUrl: qaTestData.baseUrl,
  login: qaTestData.login
};

// set config for sandbox
const sboxConfig: TestConfig = {
  env: sboxTestData.env,
  baseUrl: sboxTestData.baseUrl,
  login: sboxTestData.login
};

/**
 * set config for prod
 * TODO: replace it with PROD data
 */
const prodConfig: TestConfig = {
  env: qaTestData.env,
  baseUrl: qaTestData.baseUrl,
  login: qaTestData.login
};

const customHtmlReportConfig = {
  testFolder: 'tests',
  title: 'Dashboard E2E Tests HTML Report',
  project: 'dashboard-e2e-suite',
  testEnvironment: environment,
  outputFolder: 'custom-html-report',
  embedAssets: true,
  embedAttachments: true,
  minifyAssets: true,
  startServer: false
}

const defaultConfig: PlaywrightTestConfig = {
  testDir: './tests',
  testMatch: '/*.spec.ts',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 10 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [['blob'], ['github'], ['playwright-html', customHtmlReportConfig]] :
    [['html', { open: 'never' }], ['list'], ['playwright-html', customHtmlReportConfig]],

  /* Global setup definition*/
  //globalSetup: require.resolve('./src/config/setup/global-setup.ts'),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    // baseURL: environment === 'qa' ? qaConfig.baseUrl : environment === 'sbox'? sboxConfig.baseUrl : qaConfig.baseUrl,
    // storageState: 'state.json',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    video: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // }
  ],
};

// config object with default configuration and environment specific configuration
const config: TestConfig = {
  ...defaultConfig,
  ...(environment === 'prod' ? prodConfig : environment === 'sbox' ? sboxConfig : qaConfig)
};

export default config;