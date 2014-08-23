describe('angularjs homepage', function() {

	beforeEach(function() {
		browser.get('http://localhost:8080');
	});

	var startGame = $('#newGameButton');
	var rGuessValue = $('#rGuess');
	var gGuessValue = $('#gGuess');
	var bGuessValue = $('#bGuess');
	var preview = $('#previewButton');
	var paintBucket = $('#paint-can');
	var customerSwatch = $('#customer-swatch');

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Paint Store Express');
  });

  it('should accept values for color inputs', function() {
  	startGame.click();
  	rGuessValue.clear().sendKeys(100);
  	gGuessValue.clear().sendKeys(100);
  	bGuessValue.clear().sendKeys(100);
  	preview.click();

  	var paintColor = paintBucket.getAttribute('style');

  	expect(paintColor).toEqual('background-color: rgb(100, 100, 100);');
  });


});
