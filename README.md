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
  - `yarn start` : Runs the player in developement mode with Hot Module replacement on port **8090**, opens up electron in dev mode and also starts a local redux devtools server on port **9000**
  - `yarn build` : Builds and opens the built prod version in electron (for testing prod build)
  - `yarn package:win` : Packages the prod version for Windows (x64 bit) . Requires `wine` to be installed in Mac and Linux
  - `yarn package:mac` : Packages the prod version for Mac OSX
- **Test and lint scripts**
  - `yarn test` : Runs jest test cases
  - `yarn test:watch` : Runs jest test cases in watch mode
  - `yarn test:update` : Run jest and updates the snapshots for the components
  - `yarn test:coverage` : Runs jest test cases and opens coverage report
  - `yarn lint` : Runs eslint and displays all lint errors
  - `yarn lint:fix` : Runs eslint and tries auto fix of errors
- **Utility scripts are basically implementation for the above scripts**

*The port configurations are present in `webpack.config.dev.js` and `./helpers/redux-devtools-server.config.json`*

### Redux Devtools Setup
- By default when you run `yarn start` a remote-redux-devtools-server is launched on `localhost:9000`
- Just open up the extension of [remote redux devtools](https://github.com/zalmoxisus/redux-devtools-extension) for chrome or firefox or electron.
- Go to settings -> and check ✅ Use custom (local) server
- Give hostname as `localhost` and port as `9000` (u can change this at `./helpers/redux-devtools-server.config.json`)
- Press submit

### Contributors Guide
**Common guidelines**
- Make sure your write test cases for all the code you write.
- Make sure eslint passes

**For direct contributors:**
 - No direct push to master is allowed. (enforced in Github)
 - Raise a PR and it will be reviewed and merged.

**For external contributors:**
 - Fork the repo
 - Make your changes in the master branch of the forked repo
 - Raise a PR and it will be reviewed and merged.

## License

[MIT (Public Domain)](LICENSE.md)
