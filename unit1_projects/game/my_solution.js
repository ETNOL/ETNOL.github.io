// This is a solo challenge

// Your mission description:
// The cake is a lie. Or is it? The answer lies within claptrap.
//
//

// Pseudocode
//
//
//
//
//

// Initial Code
var hello = lies;
hello();



function lies() {
	this.cake = "lie";
	this.player = prompt("Enter your name, player.");
	console.log('Hello, ' + this.player);
	console.log("You've entered the game.");
	console.log("The cake is a lie.");
}


 function Mainframe(datastore, cpu, server, daemon) {
 	var self = this;
 	this.datastore = datastore;
 	this.cpu = cpu;
 	this.server = server;
 	this.daemon = daemon;

 	this.inviteClapTrapToParty = function(newServer) {
 		self.server = newServer;
 		self.daemon.server = newServer;
 	};
 	this.tellClapTrapHeIsAwesome = function(newCPU) {
 		self.cpu = newCPU;
 		self.daemon.cpu = newCPU;
 	};

 	this.giveClapTrapIceCream = function(newDatastore) {
 		self.datastore = newDatastore;
 		self.daemon.datastore = newDatastore;
 	};

 	this.systemReport = function() {
 		var report = "System report\ncpu: " + self.cpu.name +
 			"\ndatastore: " + self.datastore.name +
 			"\nserver: " + self.server.name;
 		console.log(report);
 	};

 	this.inspectSystem = function() {
 		self.daemon.systemCheck(self.datastore, self.cpu, self.server);
 	};

 	this.giveCake = function() {
 		if(self.datastore.giveCake() && self.cpu.giveCake() && self.server.giveCake()) {
 			var cake = {batter:"amaretto", icing:"buttercream", candles:"1"};
 			document.getElementById("main").className = "vis";
 			congrats();
 			return cake;

 		}
 		else {
 			console.log("The cake is a lie.");
 		}
 	}

}

var neuralnetprocessor = new CPU("skynet");
var deepThought = new Database("deepThought", "initialize");
var red_queen = new Server("red_queen", 1000);
var failsafe = new Daemon(deepThought, neuralnetprocessor, red_queen);
var GlaDOS = new Mainframe(deepThought, neuralnetprocessor, red_queen, failsafe);


 function Daemon(datastore, cpu, server) {
	var self = this;
	daemonDatastore = datastore;
	daemonCPU = cpu;
	daemonServer = server;
	resetSystem = function () {
		GlaDOS.datastore = deepThought;
		GlaDOS.cpu = neuralnetprocessor;
		GlaDOS.server = red_queen;
	}
	this.systemCheck = function(datastore, cpu, server) {
		try {
			if (datastore.name != daemonDatastore.name || cpu.name != daemonCPU.name || server.name != daemonServer.name) {
				resetSystem();
				console.log("System unstable! \n Restarting system now...");
			}
			else {
				console.log("System stability: stable.");
			}
		}
		catch(err) {
			resetSystem();
			console.log("System unstable! \n Restarting system now...");
		}
	};
}


function Database(manufacturer, initData) {
	databaseCake = false;
	this.name = manufacturer || "deepThought";
	this.datastore = [initData];
	this.push = function(data) {
		this.datastore.push(data);
	};
	this.logDatabase = function() {
		for(data in this.datastore) {
			console.log(data);
		};
	};
	this.pop = function() {
		console.log(this.datastore.pop());
	};
	this.giveCake = function() {
		return databaseCake;
	};
}

function CPU(manufacturer, frequency) {
	CPUcake = false;
	var self = this;
	this.name = manufacturer || "Skynet";
	this.frequency = frequency || 1000;
	this.giveCake = function() {
		return CPUcake;
	};
}

function Server(manufacturer) {
	serverCake = false;
	this.name = manufacturer || "red_queen";

	this.giveCake = function() {
		return serverCake;
	};
}


function Cube(array) {
	var self = this;
	this.step = 1;
	this.name = null;

	this.help = function() {
		if(self.name === "Claptrap") {
			console.warn(array[self.step]);
			next();
		}
		else {
			console.warn("I'm not helping you, you aren't my friend.")
		}
	};

	next = function(num) {
		if(self.step < (array.length - 1)) {
			self.step++;
		}
	};
}


setInterval(function() {GlaDOS.inspectSystem()}, 25000);

// Refactored Code






// Reflection
//
//
//
//
//
//
//
//
