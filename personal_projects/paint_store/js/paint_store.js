(function() {

	var app = angular.module("paintStore", []);

	// app.directive("navBar", function() {
	// 	return {
	// 		restrict:"E",
	// 		templateUrl:"nav-bar.html"
	// 	};
	// });

	app.directive("game", function() {
		return {
			restrict:"E",
			templateUrl:"game.html",
		};
	});

	app.controller("gameController", function() {
		var self = this;


		this.createCustomerSwatch = function() {
			r = 100;//Math.floor(Math.random() * 255);
			g = 100;//Math.floor(Math.random() * 255);
			b = 100;//Math.floor(Math.random() * 255);
			$("#customer-swatch").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
		};

		this.createGuessSwatch = function() {
			r = $("#rGuess").val();
			g = $("#gGuess").val();
			b = $("#bGuess").val();
			$("#user-swatch").css("background-color", "rgb(" + r + "," + g + "," + b + ")" );
		};

		this.guess = function() {
			self.createGuessSwatch();
			var userColor = $("#user-swatch").css("background-color");
			var customerColor = $("#customer-swatch").css("background-color");
			if (userColor == customerColor) {
				console.log("Correct Answer!");
			}
		}

	})

})();
