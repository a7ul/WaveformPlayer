const shelljs = require('shelljs');
const path = require('path');
const sourceIndexHtml = path.join(__dirname,'..','index.html');
const outputIndexHtml = path.join(__dirname,'..','build','index.html');

shelljs.cp(sourceIndexHtml,outputIndexHtml);
