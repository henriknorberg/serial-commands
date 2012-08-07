cmnd0 = function (){
	console.log("cmnd0 triggered");
	\callback(null, 'one'
};
cmnd1 = function (){
	console.log("cmnd1 triggered");
};
cmnd2 = function (){
	console.log("cmnd2 triggered");
};
cmnd3 = function (){
	console.log("cmnd3 triggered");
};

triggerMeWhenDone = function (){
	console.log("All done");
};



var serialCommands = require('../index')([cmnd0,cmnd1],triggerMeWhenDone);
serialCommands.addCommand(cmnd3);
serialCommands.addCommandAt(2,cmnd2);
serialCommands.execute();

