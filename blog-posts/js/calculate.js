
$('#turingSection').hide();
function calculate () {
	var value1 = parseInt($('#value1').val());
	var value2 = parseInt($('#value2').val());

	$('#add').text(value1 + value2);
	$('#subtract').text(value1 - value2);
	$('#multiply').text(value1 * value2);
	$('#divide').text(value1 / value2);
};

$('#turing').submit(function ( event ) {
	event.preventDefault();
	calculate();
});


//Global var on no! No closure!



var answersArray = [
	"It is supported natively by modern browsers.",
	"Because it was widely adopted as a scripting language " +
	"after its appearance through Netscape in late 1995." ,
	'Well, it was extremely powerful in comparison to html and css and continues to be so even today.',
	'It can run client-side scripts that create interaction between the user ' +
	'and the browser in ways html and css can not perform.',
	'Because unlike HTML and CSS, Javscript is a Turing-complete language.'
];

function why () {
	$('#answer').text(answersArray.shift());
	showTuringSection();
	whyButtonChange();
};

function showTuringSection () {
	if ($('#whyButton').text() === "...what?") {
		$('#turingSection').show();
		$('#whySection').hide();
	}
};

function whyButtonChange () {
	if (answersArray.length === 0) {
		$('#whyButton').text("...what?");
	}
};


$('#whyForm').submit(function ( event ) {
	event.preventDefault();
	why();
})
