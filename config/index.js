const fs = require('fs');
const config = require('./_base');

const overridesFilename = '_' + config.env;
let hasOverridesFile;
try {
    fs.lstatSync(__dirname + '/' + overridesFilename + '.js');
    hasOverridesFile = true;
} catch (e) {
    console.error(e.message)
}

let overrides;

if (hasOverridesFile) {
    overrides = require(__dirname + '/' + overridesFilename)(config);
} else {
    console.log('No configuration overrides found for NODE_ENV "' + config.env + '"');
}

module.exports = Object.assign({}, config, overrides);
