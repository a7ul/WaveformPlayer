// https://github.com/zalmoxisus/remotedev
var remotedev =  require('remotedev-server');
var reduxDevtoolsConfig = require('./redux-devtools-server.config.json');

remotedev(reduxDevtoolsConfig);
