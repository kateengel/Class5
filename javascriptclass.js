alert('Hello World!');

var x = 10;
var y = 15;
console.log(x+y);

var name = "Kate";
var lastname = "Engel";
console.log(name + " " + lastname);

food = ["pizza","chili","cookies"];
drinks = ["sunkist","wine","milk"];

meals = [food, drinks];

console.log(meals[0][1], meals[0][0]);

if (5>10) {
	console.log (" I can't believe 5 is greater then 10!");
}
else {
	console.log ("It's not actually greater is it?")
}

function askTheUser() {
	var user = prompt("Please enter a variable that is less then 10", " ");
	return user;

	if (user>10) {
		console.log("Oops try again!");
	}
	else {
		console.log("You got it!! Congrats");
	}
}
askTheUser();

function addName(someonesName) {
	return alert(someonesName);
}
addName("Kate");

function change() {
	document.getElementById('el').innerHTML = "Hello World!!";
}

function number() {
	return console.log(4);
}

function door() {
	if("Animal") {
		console.log("You have just won a puppy!");
	}
	else if("Sailboat") {
		console.log("Now you can go sailing!!");
	}
	else {
		console.log("Nothing was behind the door, try again next time!")
	}
}
door("Animal");

function noarg() {
	console.log("nonsense");

}
noarg();
// This allows you to manipulate the existing element by overwriting the words with Hello World 

// To reference jquery, use $('')
