async = require('async');

var serialCommands = module.exports = function (opts, cb) {

        return new SerialCommands(opts, cb);
};

function SerialCommands (cmnds,cb){
	if (!cmnds) this.commands = []; 
    else {  this.commands = cmnds};
	this.callback = cb;
}

SerialCommands.prototype.addCommand = function(cmnd){
	this.commands.push(cmnd);
};

SerialCommands.prototype.addCommandAt = function(indx,cmnd){
	this.commands.splice(indx, 0, cmnd);
};

SerialCommands.prototype.execute = function(){
	async.series(this.commands, this.callback);
};