var test = [document.getElementById("customNecklace"), document.getElementById("customBracelet")];
var list = document.getElementsByClassName("color");
//getting the custom necklace and bracelet radio buttons and the color checkboxes from the html
var hi = document.getElementsByClassName('review');
var lamp = document.getElementsByClassName('blueBlack');
var but = document.getElementsByClassName("tropical");
var sing = document.getElementsByClassName('custom');
var bean = document.getElementsByClassName('heart');
var bee = document.getElementsByClassName('turquoise');
var rehash = document.getElementsByClassName('pearl');
var ear = document.getElementsByClassName('flower');
//getting the review divs using their class names

function custom() {
    if(test[0].checked || test[1].checked) {
        document.getElementById("customColor").removeAttribute("disabled");
    } else {
        document.getElementById("customColor").setAttribute("disabled", "");
        for (let x = 0; x < list.length; x++) {
            list[x].checked = false;
        }
    };
}
//enables the color checkboxes if the custom radio buttons are clicked and disables and unchecks them otherwise

function everyReview() {
	document.getElementById("none").style.display = "none";
    for(let x = 0; x < hi.length; x++) {
		hi[x].style.display = "block";
	}
}
//displays all the reviews when called and hides the no reviews message

//when called, the following all display all the reviews for the particular piece of jewelry they're for, display the no reviews message if there are no reviews, and hide it otherwise
function blueReview() {
	document.getElementById("none").style.display = "none";
	for(let x = 0; x < hi.length; x++) {
		hi[x].style.display = "none";
	}
	for(let x = 0; x < lamp.length; x++) {
		lamp[x].style.display = "block";
	}
	if(lamp.length === 0) {
		document.getElementById("none").style.display = "block";
	}
}

function customReview() {
	document.getElementById("none").style.display = "none";
	for(let x = 0; x < hi.length; x++) {
		hi[x].style.display = "none";
	}
	for(let x = 0; x < sing.length; x++) {
		sing[x].style.display = "block";
	}
	if(sing.length === 0) {
		document.getElementById("none").style.display = "block";
	}
}

function tropicalReview() {
	document.getElementById("none").style.display = "none";
	for(let x = 0; x < hi.length; x++) {
		hi[x].style.display = "none";
	}
	for(let x = 0; x < but.length; x++) {
		but[x].style.display = "block";
	}
	if(but.length === 0) {
		document.getElementById("none").style.display = "block";
	}
}

function heartReview() {
	document.getElementById("none").style.display = "none";
	for(let x = 0; x < hi.length; x++) {
		hi[x].style.display = "none";
	}
	for(let x = 0; x < bean.length; x++) {
		bean[x].style.display = "block";
	}
	if(bean.length === 0) {
		document.getElementById("none").style.display = "block";
	}
}

function flowerReview() {
	document.getElementById("none").style.display = "none";
	for(let x = 0; x < hi.length; x++) {
		hi[x].style.display = "none";
	}
	for(let x = 0; x < ear.length; x++) {
		ear[x].style.display = "block";
	}
	if(ear.length === 0) {
		document.getElementById("none").style.display = "block";
	}
}

function turquoiseReview() {
	document.getElementById("none").style.display = "none";
	for(let x = 0; x < hi.length; x++) {
		hi[x].style.display = "none";
	}
	for(let x = 0; x < bee.length; x++) {
		bee[x].style.display = "block";
	}
	if(bee.length === 0) {
		document.getElementById("none").style.display = "block";
	}
}

function pearlReview() {
	document.getElementById("none").style.display = "none";
	for(let x = 0; x < hi.length; x++) {
		hi[x].style.display = "none";
	}
	for(let x = 0; x < rehash.length; x++) {
		rehash[x].style.display = "block";
	}
	if(rehash.length === 0) {
		document.getElementById("none").style.display = "block";
	}
}