async = require('async');

var serial-commands = module.exports = function (opts, cb) {
    if (typeof opts === 'object') {
        return new serialCommands(opts, cb);
    }
    else {
        return new serialCommands(cb, opts);
    }
};

function serialCommands (cmnds,cb){
	if (!cmnds) this.commands = [];
	this.callback = cb;
}

serialCommands.prototype.addCommand = function(cmnd){
	this.addCommandAt(cmnd);
};

serialCommands.prototype.addCommandAt = function(indx,cmnd){
	this.commands.splice(indx, 0, cmnd);
};

serialCommands.prototype.execute = function(){
	async.serial(this.commands, this.callback);
};