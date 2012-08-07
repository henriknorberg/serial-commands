function TestCommand (tt){
	var t = tt;
	this.execute = function (){
		//do some stuff
		console.log("TestCommand says: " + t);
		
		//Mandetory callback for async- we are done processing 
		arguments[0](null);
	};
};


triggerMeWhenDone = function (){
	console.log("All done");
};

var tCmnd1 = new TestCommand("hej");
var tCmnd2 = new TestCommand("Yo");
var tCmnd3 = new TestCommand("Hola");

var serialCommands = require('../index')([tCmnd1,tCmnd2.execute],triggerMeWhenDone);
serialCommands.addCommand(tCmnd3);
serialCommands.addCommandAt(10,tCmnd1);
serialCommands.execute();

