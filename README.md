# YPlayer

## Dev Guide
### Getting started
#### Setup
- Install [yarn](https://yarnpkg.com/en/docs/install)
- `git clone https://github.com/master-atul/YPlayer.git`
- `cd YPlayer`
- `yarn`
- Then run the below commands as per requirements

#### NPM scripts:
- **Basic scripts**
  - `yarn start` : Runs the player in developement mode with Hot Module replacement
  - `yarn build` : Builds and opens the built prod version in electron (for testing prod build)
  - `yarn package:win` : Packages the prod version for Windows (x64 bit) . Requires `wine` to be installed in Mac and Linux
  - `yarn package:mac` : Packages the prod version for Mac OSX
- **Test and lint scripts**
  - `yarn test` : Runs jest test cases
  - `yarn test:watch` : Runs jest test cases in watch mode
  - `yarn test:update` : Run jest and updates the snapshots for the components
  - `yarn test:coverage` : Runs jest test cases and opens coverage report
  - `yarn lint` : Runs eslint and displays all lint errors
  - `yarn lint:fix` : Runs elsint and tries auto fix of errors
- **Utility scripts are basically implementation for the above scripts**

## License

[MIT (Public Domain)](LICENSE.md)
