import os from 'os';
const execFile = require('child_process').execFile;

const queue = [];

export const getOptimalMaxProcesses = () => os.cpus().length;
