var exec = require('child_process').execSync;

module.exports = function(context) {
    console.log('plug info: ' + JSON.stringify(context.opts.plugin.pluginInfo));
    exec('npm install', {
        cwd: context.opts.plugin.pluginInfo.dir
    });
};
