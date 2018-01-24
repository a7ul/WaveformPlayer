import winston from 'winston';
const Transport = require('winston-transport');

class BrowserLog extends Transport {
  constructor (opts) {
    super(opts);
  }
  log (info, callback) {
    setImmediate(() => {
      this.emit('logged', info);
    });
    console.log(info); // eslint-disable-line no-console
    callback();
  }
}

const logger = winston.createLogger({
  level: 'silly',
  format: winston.format.json(),
  transports: [new BrowserLog()]
});

export default logger;
