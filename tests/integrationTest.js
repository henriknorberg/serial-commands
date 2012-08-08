function TestCommand (tt){
	var t = tt;
	this.execute = function (cllbck){
		console.log("TestCommand says: " + t);
		if (typeof cllbck === "function") cllbck(null);
	/*
	setTimeout(function(args){
				//do some stuff
				console.log("TestCommand says: " + t);
				
				//Mandetory callback for async- we are done processing
				clbck(null);
			},  Math.random() * 500, arguments);
		//arguments[0](null);
		*/
	};

}

sublistDone = function (){
	console.log("				..... Sublist done");
};

triggerMeWhenDone = function (){
	console.log("All done");
};

var tCmnd1 = new TestCommand("hej");
var tCmnd2 = new TestCommand("Yo");
var tCmnd3 = new TestCommand("Hola");

var tCmnd4 = new TestCommand("	Hallo");
var tCmnd5 = new TestCommand("	Hei");
var serialCommandsInSerialCommands = require('../index')([tCmnd4,tCmnd5],sublistDone);

var serialCommands = require('../index')([tCmnd1,tCmnd2.execute],triggerMeWhenDone);
// NOT WORKING //
serialCommands.addCommand(serialCommandsInSerialCommands); //add serial queue in serial queue...
serialCommands.addCommand(tCmnd3);
serialCommands.addCommandAt(10,tCmnd1);

serialCommands.execute();
//serialCommandsInSerialCommands.execute();

