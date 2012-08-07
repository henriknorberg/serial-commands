async = require('async');

var serialCommands = module.exports = function (opts, cb) {

        return new SerialCommands(opts, cb);
};

function SerialCommands (cmnds,cb){
   
     this.commands = [];

    // Please refactor into addCommandAt
    this.commands = cmnds.map(function(cmnd){
      if(typeof cmnd === "object" && typeof cmnd.execute === "function"){
            return cmnd.execute;
        } else if (typeof cmnd === "function"){
            return cmnd;
        } else {
            console.log("SerialCommands: Tried to add non command " + cmnd);
        }
    });
   
    this.callback = cb;
}

SerialCommands.prototype.addCommand = function(cmnd){
        this.addCommandAt(this.commands.length,cmnd.execute);
};

SerialCommands.prototype.addCommandAt = function(indx,cmnd){
    //assume last position id out of bounds
    if (indx > this.commands.length) indx = this.commands.length;
    
    //Make sure it is a command(has a execute method)!
    if(typeof cmnd === "object" && typeof cmnd.execute === "function"){
        this.commands.splice(indx, 0, cmnd.execute);
    } else if (typeof cmnd === "function"){
        this.commands.splice(indx, 0, cmnd);
    } else {
        console.log("SerialCommands: Tried to add non command " + cmnd);
    }

};

SerialCommands.prototype.execute = function(){
	async.series(this.commands, this.callback);
};