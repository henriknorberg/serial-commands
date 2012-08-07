cmnd0 = function (callback){
	console.log("cmnd0 triggered");
	callback(null, 'zero');
};
cmnd1 = function (callback){
	console.log("cmnd1 triggered");
	callback(null, 'one');
};
cmnd2 = function (callback){
	console.log("cmnd2 triggered");
	callback(null, 'two');
};
cmnd3 = function (callback){
	console.log("cmnd3 triggered");
	callback(null, 'three');
};

triggerMeWhenDone = function (){
	console.log("All done");
};



var serialCommands = require('../index')([cmnd0,cmnd1],triggerMeWhenDone);
serialCommands.addCommand(cmnd3);
serialCommands.addCommandAt(2,cmnd2);
serialCommands.execute();

