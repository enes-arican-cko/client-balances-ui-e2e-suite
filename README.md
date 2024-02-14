# 🚧 Dashboard E2E Suite 🚧

This project is a _WORK IN PROGRESS_ and it aims to serve as an alternative e2e automation framework.

## How to run tests

1. Make sure you have node installed and then run `npm i` to download all required dependencies.

2. Run any of the following commands:

- ### 🙈 Headless mode (default)

  - QA:`npm run test`
  - SBOX: `npm run sbx-test`

- ### 👀 Headed mode

  - QA: `npm run test:headed`
  - SBOX: `npm run sbx-test:headed`

- ### 🖥️ UI mode (_recommended for debugging_)

  - QA: `npm run test:ui`
  - SBOX: `npm run sbx-test:ui`

- ### 🐞 Debug mode

  - QA: `npm run test:debug`
  - SBOX: `npm run sbx-test:debug`

- ### 🗄️ Trace mode

  - QA: `npm run test:trace`
  - SBOX: `npm run sbx-test:trace`

     NOTE: _Traces are normally run in a CI env, because locally you can use UI Mode for developing and debugging tests. To run traces locally without using UI Mode, you can force tracing to be on with the above command. To view the trace run the_ `show-report` _command._

- ### ⚡ Specific test

  - QA: `npm run test "tests/e2e/smoke/home.spec.ts"`
  - SBOX: `TEST_ENV=sbox npm run test "tests/e2e/smoke/home.spec.ts"`

- ### 🔎 Visual tests

  - QA: `npm run test:visual`
  - SBOX: `npm run sbx-test:visual`

- ### 📊 Display HTML report

  - `npm run show-report`

### 🔗 Click [here](https://playwright.dev/docs/test-cli) for more details
