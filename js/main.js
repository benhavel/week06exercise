var testOne = "What Kind of variable am I";

// this is a string

var testTwo = 256;

// this is a number

var testThree = false;

// this is a boolean

var testFour = 'true';

// this is a string

var testFive = '128';

// this is a string

var testSix = " ";

// this is a space string

var testOne = "hello" + "there";

// this is a string that would be hellothere

var testTwo = '100' + 28;

// this is a string with numbers 

var testThree = true + 3;

// boolean with a number, it would count as 4

var testFour = 'false' + 5;

// this is a string with the number 5, this would log as "false5" because the string takes precedence.

var testFive = '128' - 3;

// this is a string with a number, which equals 125, as 3 minus 128 is 125

var testSix = " " * 9;

// doesn't equal anything.

var testSeven = 'zero' - 1;

// doesn't equal anything as well, its NaN

var testEight = 'five'.length;

// counts out the length of charactors in the string.

var testNine = 'five' [0] + 'ever';

// takes 0 

var testTen = 'a' > 'b';

// gives a false boolean. Propbably because its not a number?

var testEleven = 'number' .length < 7;

// Gives the true boolean because number is less than 7 charactors

var testTwelve = '12' == 12;

// gives the true boolean, because the string 12 does in fact equal the number 12.

var testThirteen = 'twelve' == 12;

// gives the false boolean, because 12 doesn't equal Twelve in actual numbers.

var testFourteen = '14' === 14;

// gives false, due to not being strictly the number 14, it is a string.

var testFifteen = 'Hi there' [0] + 'open sesame' [2] + 'alohamora' [1] + 'eulalia' [4] + 'harkonnen' [4] + 'BATMAN!' [6];

// gives back "hellp" as the numbers take away just those charactors. 

var string1 = "Hello, ";

var string2 = "my name is ";

var string3 = "Kingsley Pappagorgio."

var combineStrings = string1 + string2 + string3;

console.log(combineStrings);

// this gives back Hello, my name is Kingsley Pappagorgio.

var num1 = 8;

var num2 = 52;

var num3 = 60;

var combinedNumbers = num1 + num2 + num3;

console.log(combinedNumbers);

// gives back the total of all three numbers: 120;

var mixedNum1 = 10;

var mixedString1 = "ten";

var mixedNum2 = "10";

var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;

console.log(mixedConcatenation)

// this equals 10Ten10 as a string because the string has taken precidence.

var num4 = 5;

var num5 = 0;

if(num4 > 1) {
	console.log("Num4 is greater than 1");
} else {
	console.log("Num4 is NOT greater than 1");
};


// this is Num4 is great than 1.

var num4 = 5;

var num5 = 0;

if(num4 < num5 || num4 === num5) {
	console.log("If statement ran!");
} else if (num5 === "0" || true) {
	console.log("Else if statement ran");
} else {
	console.log("Else statement ran");
};

// this gives back "Else if statment ran"


var num4 = 5;

var num5 = 0;

if(num4 > num5 && num4 === num5) {
	console.log("If statement ran!");
} else if (num5 === "0" || true) {
	console.log("Else if statement ran");
} else {
	console.log("Else statment ran");
};

// this gives back "Else if Statment ran"

var string1 = "this is a string";

for(var i = 0; i < string1.length; i = i + 1) {
	console.log(i, string1[i]);
};


// this spells out "this is a string"


var string2 = "coding";

var total = 0;

for(var i = 0; i < string2.length; i++) {
	total = total + i;
};

console.log(total);

// this gives back the number of 15

var string3 = "onomatopoeia";

for(var i = 0; i < string3.length; i++) {
	if(string3[i] == "0") {

	console.log(i, string3[i]);

	};
};

// this gives back the number 12

var string4 = "You're gonna need a bigger boat.";

for(var i = 0; i < string4.length; i++) {
	if(string4[i] == "a" || string4[i] == "e" || string4[i] == "i" || string4[i] == "o" || string4[i] == "u") {
		console.log(string4[i]);
	};
};

// cant figure this one out.

function testStuff(a, b) {

	if(a > 25 && b < 100) {
		console.log(a + " is greater than 25 and " + b + " is less than 100");
	} else {
		console.log(a + " is NOT greater than 25 or " + b + " is NOT less than 100");
	};
};

testStuff(10, 101);

testStuff(26, 99);

testStuff(100, 25);

// 1. NOT 2. correct 3. correct correct 

function testStuff2(c, d) {
	if(c == 25) {

		return c + " is equal to 25";

	} else if (d <= 100) {

		return d + " is less than or equal to 100";
	
	} else {

		return "Neither if nor else if statment ran";
	};

};

testStuff2(26, 101);

testStuff2(25, 99);

testStuff2(102, 24);

// returns "24 is less than or equal to 100"

function countVowels(someString) {

	var vowels = 0;

	for(var i = 0; i < someString.length; i++) {

		if(someString[i] == "a" || someString[i] == "e" || someString[i] == "i" || someString[i] == "o" || someString[i] == "u") {

			vowels++;
		};
	};

	return vowels;
};

countVowels("I am the very model of a modern major general");

countVowels("Exudent pursed by a bear");

countVowels("o1234567891o");


// this counts and finds all vowels.












