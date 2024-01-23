# 🚧 Dashboard E2E Suite 🚧 
This project is a _WORK IN PROGRESS_ and it aims to serve as an alternative e2e automation framework.

### How to run tests:
1. Make sure you have node installed and then run `npm i` to download all required dependecies.

2. Run any of the following commands: 
>>- Headless mode (default):\
>>`npm run test` OR \
`TEST_ENV=sbox npm run test`

>>- Headed mode:\
>>`npm run test:headed` OR \
`TEST_ENV=sbox npm run test:headed`

>>- UI mode (_recommended for debugging_):\
>>`npm run test:ui` OR \
`TEST_ENV=sbox npm run test:ui`

>>- Debug mode:\
>>`npm run test:debug` OR \
`TEST_ENV=sbox npm run test:debug`

>>- Trace mode:\
>>`npm run test:trace` OR \
`TEST_ENV=sbox npm run test:trace`\
\
 NOTE: _Traces are normally run in a CI env, because locally you can use UI Mode for developing and debugging tests. To run traces locally without using UI Mode, you can force tracing to be on with the above command. To view the trace run the_ `show-report` _command._

>>- Specific test:\
>>`npm run test common/homepage.spec.ts` OR \
`TEST_ENV=sbox npm run test common/homepage.spec.ts`

>>#### NOTE: Supported env as of today: `qa` & `sbox`

3. Display html report:
>>- `npx playwright show-report`