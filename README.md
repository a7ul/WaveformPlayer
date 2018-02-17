# WaveformPlayer

## Dev Guide
### Getting started
#### Setup
- Install [yarn](https://yarnpkg.com/en/docs/install)/npm and node.
- `git clone https://github.com/master-atul/WaveformPlayer.git`
- `cd WaveformPlayer`
- `yarn`
- After this download the assets bundle from `https://github.com/master-atul/WaveformPlayer/releases/download/binaries/binaries.tar.gz`
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
  - `npm run start` : Runs the electron app in dev mode

### Redux/React Devtools Setup
- When you run `npm run start`, the electron window will have the devtools panel open with two extra tabs React and Redux.

### Pre-push hooks
Currently whenever you push three types of tests run to make sure you are pushing a working code.
1. unit test cases
2. eslint

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

[CC0 1.0](LICENSE.md)


## TODO

1. REMOVE THE ENTIRE PLUGIN FROM REDUCER - DONT THINK IT IS NEEDED ✅
2. SETTINGS PAGE
3. UI STYLING
4. CONTROLLER AND PLAYING OF ACTUAL MUSIC
5. YOUTUBE SUPPORT
6. FIX THE TEST CASES AND WRITE MORE
7. MOVE PLUGIN_ID AND NAME OUT OF INIT - helps in debugging 
8. START WRITING DOCUMENTATION
9. ADD PLUGIN REMOVE FUNCTIONALITY along with ENABLE/DISABLE