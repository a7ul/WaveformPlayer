// import winston from 'winston';

// const Transport = require('winston-transport');

// class BrowserLog extends Transport {
//   log(info, callback) {
//     setImmediate(() => {
//       this.emit('logged', info);
//     });
//     if (process.env.NODE_ENV !== 'test') {
//       console.log(info); // eslint-disable-line no-console
//     }
//     callback();
//   }
// }

// const logger = winston.createLogger({
//   level: 'silly',
//   format: winston.format.json(),
//   transports: [new BrowserLog()]
// });
const logger = {
  info: console.log,
  debug: console.log,
  error: console.log,
  silly: console.log,
  log: console.log
};

export default logger;
