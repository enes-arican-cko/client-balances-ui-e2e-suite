import { PlaywrightTestConfig, devices } from '@playwright/test';
import * as qaTestData from './config/qa.json';
import * as sboxTestData from './config/sbox.json';

// Config to hold extra properties
interface TestConfig extends PlaywrightTestConfig {
  env: string,
  baseUrl: string, 
  login: { username: string; password: string; }
}

const defaultConfig:  PlaywrightTestConfig = {
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
};

// set config for qa
const qaConfig: TestConfig = {
  env: 'qa',
  baseUrl: 'https://identity-qa.ckotech.co/',
  login: qaTestData.login
};

// set config for sandbox
const sboxConfig: TestConfig = {
  env: 'sbox',
  baseUrl: 'https://dashboard.sandbox.checkout.com/',
  login: sboxTestData.login
};

// set config for prod
const prodConfig: TestConfig = {
  env: 'prod',
  baseUrl: 'https://identity.checkout.com/',
  login: qaTestData
};

// get the environment type from command line. If none, set it to qa
const environment = process.env.TEST_ENV || 'qa';

// config object with default configuration and environment specific configuration
const config: TestConfig = {
  ...defaultConfig,
  ...(environment === 'prod' ? prodConfig : environment === 'sbox' ? sboxConfig : qaConfig)
};

export default config;