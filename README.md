# YPlayer

## Dev Guide
### Getting started
#### Setup
- Install [yarn](https://yarnpkg.com/en/docs/install)/npm and node.
- `git clone https://github.com/master-atul/YPlayer.git`
- `cd YPlayer`
- `yarn`
- After this download the assets bundle from `https://github.com/master-atul/YPlayer/releases/download/binaries/binaries.tar.gz`
- extract `binaries.tar.gz` into /app/assets folder.
You should now get something similar to
```
├── app
│   ├── assets
│   │   ├── binaries
│   │   │   ├── linux
│   │   │   │   ├── AtomicParsley
│   │   │   │   ├── ffmpeg
│   │   │   │   ├── ffprobe
│   │   │   │   ├── ffserver
│   │   │   │   └── youtube-dl
│   │   │   ├── mac
│   │   │   │   ├── AtomicParsley
│   │   │   │   ├── ffmpeg
│   │   │   │   ├── ffprobe
│   │   │   │   ├── ffserver
│   │   │   │   └── youtube-dl
│   │   │   └── windows
│   │   │       ├── AtomicParsley.exe
│   │   │       ├── ffmpeg.exe
│   │   │       ├── ffplay.exe
│   │   │       ├── ffprobe.exe
│   │   │       └── youtube-dl.exe
```
- Then run the below commands as per requirements

#### NPM scripts:
- **Basic scripts**
  - `npm run start` : Runs the electron app in developement mode with webpack running on alternate terminal with Hot Module replacement on port **9000**
  - `npm run build` : Runs npm run build:src and then runs the electron app in production mode with those built source code and assets
  - `npm run package:win` : Packages the prod version for Windows (x64 bit) . Requires `wine` to be installed in Mac and Linux
  - `npm run package:mac` : Packages the prod version for Mac OSX
  - `npm run package:linux`: Packages the prod version for linux
- **Test and lint scripts**
  - `npm run test` : Runs jest test cases
  - `npm run test:watch` : Runs jest test cases in watch mode
  - `npm run test:update` : Run jest and updates the snapshots for the components
  - `npm run test:coverage` : Runs jest test cases and opens coverage report
  - `npm run lint` : Runs eslint and displays all lint errors
  - `npm run lint:fix` : Runs eslint and tries auto fix of errors
- **Utility scripts are basically implementation for the above scripts**
  - `npm run buildServer` : Only runs the webpack devserver on port **9000**
  - `npm run build:src`: Runs the prod build on webpack and puts the files on dist folder .. DOESN'T DO ELECTRON BUILD.

*The port configurations are present in `webpack.config.dev.js`*

### Redux/React Devtools Setup
- When you run `npm run start`, the electron window will have the devtools panel open with two extra tabs React and Redux.

### Pre-push hooks
Currently whenever you push three types of tests run to make sure you are pushing a working code.
1. unit test cases
2. eslint
3. webpack prod build


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

[WTFPL](LICENSE.md)
