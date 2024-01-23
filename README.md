# 🚧 Dashboard E2E Suite 🚧 
This project is a _WORK IN PROGRESS_ and it aims to serve as an alternative e2e automation framework.

### How to run tests:
1. Make sure you have node installed and then run `npm i` to download all required dependecies.

2. Run any of the following commands: 
>>>- Headless mode (default):\
>>>`TEST_ENV=<env> npx playwright test reports/reporting.spec.ts`

>>>- Headed mode:\
>>>`TEST_ENV=<env> npx playwright test reports/reporting.spec.ts --headed` 

>>>- UI mode (_recommended for debugging_):\
>>>`TEST_ENV=<env> npx playwright test reports/reporting.spec.ts --ui`

>>>- Debug mode:\
>>>`TEST_ENV=<env> npx playwright test reports/reporting.spec.ts --debug` 

>>>- Trace mode:\
>>>`TEST_ENV=<env> npx playwright test reports/reporting.spec.ts --trace on`\
\
 NOTE: _Traces are normally run in a CI env, because locally you can use UI Mode for developing and debugging tests. To run traces locally without using UI Mode, you can force tracing to be on with the above command. To view the trace run the_ `show-report` _command._
>>>#### NOTE: Supported env as of today: `qa` & `sbox`

3. Display html report:
>>>- `npx playwright show-report`