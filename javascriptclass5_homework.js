/* Cheat Sheet file for Jquery/Javascript:

 Can include javascript in your script multiple ways: #1: include reference to the javascript file in the HTML
 <script </script>

//#2: Include Javascript within the HTML: */
<script> 
 $('img.pup1').click( function() {
	$(this).hide();
 }); </script>

/* To check your code in the console, use */ 
console.log("Hi I'm Kate");
/*	This will tell you if the script is working/getting to the console log.

You can also create an alert: */ alert("Hi I'm Kate! Code is working.");

/* Can change an existing HTML using the innerHTML command: */
 function change() {
	document.getElementById('el').innerHTML = "Changed to This";
 }
 <div onclick="change()" id="el"> Text to Change </div>

/* Variables in JavaScript:

 Example of variables - */var x = 0  var y = 3 
 	var z = x + y
 	 var math = z -1 /*(this answer would be 2 as x+y=3-1 =2)
 Can also use variales to capture strings or booleans: */
 var name = "Zach";
 var anotherVariable = false;

 /* Arrays in JavaScript: */

 var arrayVar = ["Mazda","Jetta","BMW","Nissan"]

 /* Can also have arrays within an Array. Example:
*/
 var arrayVar = ["Mazda","Jetta","BMW","Nissan"]
 var foodVar = ["pizza", "soda", "ice cream", "hummus"]

var comboVar = [arrayVar, foodVar]

/*If i wanted to access Jetta, I could run the following code:
*/
console.log(comboVar[0][1]);

/* Testing: Test if something is true or false */

"The number is 5" === "The number is 5" 

5 != 10

/* Both of these will return true. Always use three = when testing  equals
 or != when testing not equal

 Logic: if then statements*/

 if (100===100) {
 	console.log("We are showing equal numbers!");
 }
 	else {
 		console.log("These numbers don't match!");
 	}
 

/* Another if statement */

if (20<30) {
	alert("I would believe that");
}
	else if (30>40) {
		console.log("Not as believable");
	}
	else {
		console.log("Neither of these make sense");
	}

/* Functions- encapsulate code for later use: Function example
 Note: You have to call the function for it to run in the program.
*/

function addTwo (aValue) {
	return aValue * 12;
}
console.log(aValue(6));

function Message(sayMessage) {
	return alert(sayMessage);
}
	Message("Hi! Welcome to the program!");

/*  For Loops : Need a define a variable and then select a length of the loop

Example as follows */

var hummus = ["plain", "sun dried tomato", "red pepper", "spicy"]
for (var i=0; i< hummus.length; i++) {
	console.log(hummus[i])
}

var 99bottles = 0
for (var i = 100; i > 99bottles; i--) {
	console.log(99bottles[i])
}



