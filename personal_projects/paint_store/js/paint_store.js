(function() {

	// Initialize Angular Module //
	var app = angular.module("paintStore", []);


	// Basic Directives //

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

	// Game Controller //

	app.controller("GameCtrl", function($interval, $scope) {
		// Using "self" to control for possible scope problems //
		var self = this;
		// Only 1 directive can be displayed at a time. gameState controls which is displayed //
		this.gameState = "newGame";
		// Swatch RGB Values //
		var swatchR;
		var swatchG;
		var swatchB;
		// Player Guess RGB Values //
		var paintR = 0;
		var paintG = 0;
		var paintB = 0;
		// Scoring Vars //
		this.score = 0;
		this.lastScore;
		this.customers = 0;
		// Set Game Time Limit //
		this.timeLimit = 120;
		this.timeleft;
		// Time Limit Text Effect //
		this.textColor = "black";



		// Main Game Functions //
		this.giveToCustomer = function() {
			self.preview();
			self.updateScore();
			self.customers++;
			self.newSwatch();
			self.flashScore();
		};

		this.updateScore = function () {
			self.lastScore = self.scoreColor();
			self.score += self.lastScore;
		}

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
		// Sets a base score of 200, deducts for each point of variance between the swatch
		// values and the customer's paint guess values //
		// BUG: Possible to spam a guess of ~130 and slowly increase score over enough guesses.
		// I ran up a score of around 3k+ over 832 customers this way.
		this.scoreColor = function() {
			score = 200;
			rVarience = Math.abs(swatchR - paintR);
			gVarience = Math.abs(swatchG - paintG);
			bVarience = Math.abs(swatchB - paintB);
			console.log(rVarience);
			score = score - rVarience - gVarience - bVarience;
			return score;
		}
		// Needs to be refactored... Too many responsibilities.
		// Performs countdown, triggers 'game over' if 0, triggers red time text if under 10.
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
		// Basic setter / getter directive controls //
		// No setter for new game, directive only shows once at initial page load //

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
			$interval.cancel(self.countdown); // Does not work, timer ends via last $interval param
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
