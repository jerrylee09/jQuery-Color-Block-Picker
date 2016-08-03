$(document).ready(function() { 



$('.container').append('<div class=" red box"></div>');
$('.container').append('<div class=" green box"></div>');
$('.container').append('<div class=" blue box"></div>');
$('.container').append('<div class=" alpha box"></div>');


// var colors = [
// 'AliceBlue' ,
// 'AntiqueWhite' ,
// 'Aqua',
// 'Aquamarine',
// 'CornflowerBlue',
// 'FireBrick',
// 'LightSlateGray',
// 'MistyRose',
// 'White', 
// 'WhiteSmoke', 
// 'Yellow', 
// 'YellowGreen'
// ];

var randomColor;

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function colorRan(){
var randNum = randomNumber(1,4);

	switch (randNum) {
		case 1 : 
			randomColor = "red";
			break;
		case 2 : 
			randomColor = "green";
			break;
		case 3: 
			randomColor = "blue";
			break;
		case 4: 
			randomColor = "alpha";
			break;
	}
	$("#color").text(randomColor);
}
colorRan();


function colorRan2() {
var addNewRan = randomNumber(1,5);
	switch (addNewRan) {
		case 1 : 
			addRandomClass = "AliceBlue";
			break;
		case 2 : 
			addRandomClass = "AntiqueWhite'";
			break;
		case 3 : 
			addRandomClass = "Aqua";
			break;
		case 4 : 
			addRandomClass = "Aquamarine";
			break;
		case 4 : 
			addRandomClass = "Yellow";
			break;
		case 5 : 
			addRandomClass = "YellowGreen";
			break;
	}
	
}
// console.log(colorRan2());
function addClassName(value) {
	var randomClass = randomNumber(1,6);
	switch (randomClass) {
		case 1 : 
			value = "AliceBlue";
			return value;
			break;
		case 2 : 
			value = "AntiqueWhite'";
			return value;
			break;
		case 3 : 
			value = "Aqua";
			return value;
			break;
		case 4 : 
			value = "Aquamarine";
			return value;
			break;
		case 5 : 
			value = "Yellow";
			return value;
			break;
		case 6 : 
			value = "YellowGreen";
			return value;
			break;

	}
}



$('.box').on('click', function () {
	colorRan();
	if($(this).hasClass(addRandomColor)) {
		$('.answer').text('You got the correct color!');
	} else {
		$('.answer').text('You got the incorrect color , try agian.');
	}

});

$('.reset').on('click', function() {
	$('.answer').text('');
	colorRan();
});

$('.add').on('click', function() {
	var value = '';
	value = addClassName(value);
	$("#color").text(randomColor);
	$('.container').append(' <div class=" ' + value + ' "></div> ');
	console.log('click add!');
});

$('.delete').on('click', function() {
	$('.container').last().remove();
	console.log('click here');
});



}); // document.readyfunction end here










