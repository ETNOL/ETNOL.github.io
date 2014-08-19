(function() {

	var app = angular.module("paintStore", []);

	// app.directive("navBar", function() {
	// 	return {
	// 		restrict:"E",
	// 		templateUrl:"nav-bar.html"
	// 	};
	// });

	app.directive("newGame", function() {
		return {
			restrict:"E",
			templateUrl:"new_game.html",
		};
	});

	app.directive("game", function() {
		return {
			restrict:"E",
			templateUrl:"game.html",
		};
	});

	app.directive("gameOver", function() {
		return {
			restrict:"E",
			templateUrl:"game_over.html",
		};
	});

	app.controller("GameCtrl", function($interval, $scope) {
		var self = this;
		this.gameState = "newGame";
		var swatchR;
		var swatchG;
		var swatchB;
		var paintR = 0;
		var paintG = 0;
		var paintB = 0;
		this.score = 0;
		this.customers = 0;
		this.timeLimit = 120;
		this.timeleft;
		this.textColor = "black";
		this.lastScore;


		// Main Game Functions //
		this.giveToCustomer = function() {
			self.preview();
			self.lastScore = self.scoreColor();
			self.score += self.lastScore;
			self.customers++;
			self.newSwatch();
			self.flashScore();
		};

		this.newSwatch = function() {
			swatchR = Math.floor(Math.random() * 255);
			swatchG = Math.floor(Math.random() * 255);
			swatchB = Math.floor(Math.random() * 255);
			$("#customer-swatch").css("background-color", "rgb(" + swatchR + "," + swatchG + "," +
				swatchB + ")");
		}

		this.preview = function() {
			paintR = $("#rGuess").val();
			paintG = $("#gGuess").val();
			paintB = $("#bGuess").val();
			$("#paint-can").css("background-color", "rgb(" + paintR + "," + paintG +
				"," + paintB + ")" );
		}

		this.scoreColor = function() {
			score = 200;
			rVarience = Math.abs(swatchR - paintR);
			gVarience = Math.abs(swatchG - paintG);
			bVarience = Math.abs(swatchB - paintB);
			console.log(rVarience);
			score = score - rVarience - gVarience - bVarience;
			return score;
		}

		this.countdown = function() {	$interval(function(){
				self.timeleft--;
				if (self.timeleft === 0) {
					self.gameOverScreen();
				}
				else if (self.timeleft < 10) {
					self.textColor = "red";
				}
				else {
					self.textColor ="black";
				}
			}, 1000, self.timeLimit);
		}

		// DOM Window Functions //

		this.newGame = function() {
			return this.gameState === "newGame";
		}

		this.startNewGame = function() {
			this.gameState = "gameInProgress";
			init();
		}

		this.gameInProgress = function() {
			return this.gameState === "gameInProgress";
		}

		this.gameOver = function() {
			return this.gameState === "gameOver";
		}

		this.gameOverScreen = function() {
			this.gameState = "gameOver";
			$interval.cancel(self.countdown);
		}

		// Initialization Functions //

		var init = function() {
			self.score = 0;
			self.lastScore = 0;
			self.newSwatch();
			self.timeleft = self.timeLimit;
			self.countdown();
			$('#scoreFlash').css("visibility", "hidden");

		}

		this.initializeGame = function() {
			init();
		}

		// Game Effects //

		this.flashScore = function() {
			$('#scoreFlash').css("visibility", "visible").fadeOut(400, function() {
				$('#scoreFlash').css("display","inline").css("visibility", "hidden");
			});
		}

	})

})();
