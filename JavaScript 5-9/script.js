// Question 1
//Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);
document.write("<br>");

// Question 2
//2. Repeat task 1 for subtraction, multiplication, division & modulus.

var num1 = 3;
var num2 = 5;
var sum = num1 - num2;
document.write("<br> Subtraction of " + num1 + " and " + num2 + " is " + sum);

//multiplication

var num1 = 3;
var num2 = 5;
var sum = num1 * num2;
document.write(
  " <br> Multiplication of " + num1 + " and " + num2 + " is " + sum
);

//division

var num1 = 3;
var num2 = 5;
var sum = num1 / num2;
document.write(" <br> Division of " + num1 + " and " + num2 + " is " + sum);

//modulus

var num1 = 3;
var num2 = 5;
var sum = num1 % num2;
document.write(" <br> Modulus of " + num1 + " and " + num2 + " is " + sum);
document.write("<br>");

// Question 3
// Do the following using JS Mathematic Expressions
// a. Declare a variable.
var a = 5;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write(" <br> Value after variable declaration is: " + a);
// c. Initialize the variable with some number.
var b = 5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("<br> Initial value: " + b);
// e. Increment the variable.
var c = ++b;
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write("<br> Value after increment is: " + c);
// g. Add 7 to the variable.
var d = c + 7;
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
document.write("<br> Value after addition is: " + d);
// i. Decrement the variable.
var e = --d;
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write("<br> Value after decrement is: " + e);
// k. Show the remainder after dividing the variable’s value
// by 3.
var f = e % 3;
// l. Output : “The remainder is : 0”.
document.write("<br> The remainder is: " + f);
document.write("<br>");

// Question 4
// Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write(
  " <br> Total cost to buy 5 tickets to a movie is: " + totalCost + "PKR"
);
document.write("<br>");

// Question 5
// Write a script to display multiplication table of any
// number in your browser. E.g

var num = 8;
document.write(" <br> Table of " + num);
for (var t = 1; t <= 10; t++) {
  document.write("<br>" + num + "x" + t + "=" + num * t);
}
document.write("<br>");

// Question 6
// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsius = 25;
var fahrenheit = (celsius * 9) / 5 + 32;
document.write("<br>" + celsius + "C is " + fahrenheit + "F");

var fahrenheit = 70;
var celsius = ((fahrenheit - 32) * 5) / 9;
document.write("<br>" + fahrenheit + "F" + celsius + "C is ");
document.write("<br>");

// Question 7
// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var totalCost = item1Price * item1Quantity + item2Price * item2Quantity;
document.write("<br> Price of item 1 is  " + item1Price);
document.write("<br> Quantity of item 1 is  " + item1Quantity);
document.write("<br> Price of item 2 is  " + item2Price);
document.write("<br> Quantity of item 2 is  " + item2Quantity);
document.write("<br> Shipping Charges is 100");
document.write("<br> Total cost of your order is " + totalCost);
document.write("<br>");

// Question 8
// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("<br> Total Marks : " + totalMarks);
document.write("<br> Obtained Marks " + obtainedMarks);
document.write("<br> Total percentage is : " + percentage);
document.write("<br>");

// Question 9
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var usDollar = 10;
var saudiRiyal = 25;
var totalCurrency = usDollar * 278.5 + saudiRiyal * 74.26;
document.write("<br> Total Currency in PKR is : " + totalCurrency);
document.write("<br>");

// Question 10
// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var num = 10;
var result = ((num + 5) * 10) / 2;
document.write("<br> Answer is : " + result);
document.write("<br>");

// Question 11
// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var currentYear = 2024;
var birthYear = 2004;
var age1 = currentYear - birthYear;
var age2 = currentYear - birthYear - 1;
document.write("<br> Current Year : " + currentYear);
document.write("<br> Birth Year : " + birthYear);
document.write("<br> Your age is : " + age1);
document.write("<br> Your Second age is : " + age2);
document.write("<br>");

// Question 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("<br> Radius of circle is : " + radius);
document.write("<br> Circumference of circle is : " + circumference);
document.write("<br> Area of circle is : " + area);
document.write("<br>");

// Question 13
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var favSnack = "Choclate Chip";
var currentAge = "20";
var maxAge = "45";
var amountPerDay = 4;
var totalAmount = (maxAge - currentAge) * 365 * amountPerDay;
document.write("<br> Favourite Snack : " + favSnack);
document.write("<br> Current Age : " + currentAge);
document.write("<br> Estimated Maximum Age : " + maxAge);
document.write("<br> Amount per day : " + amountPerDay);
document.write(
  "<br> You will need " +
    favSnack +
    " to last you until the ripe old age of " +
    maxAge
);
document.write(
  "<br> You will need " +
    totalAmount +
    favSnack +
    "  last you until the ripe old age of " +
    maxAge
);
document.write("<br>");


//--------------------------------------Chp 6-9----------------------------

// Question 1
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 10;
document.write("<br>------------------ Chapter 6 till 9 starts from here------------------");
document.write("<br> The value of a is  : " + a );
document.write("<br>" );
document.write("<br> The value of ++a is  : " + ++a );
document.write("<br> Now , The value of a is  : " + a );
document.write("<br>" );
document.write("<br> The value of a++ is  : " + a++ );
document.write("<br> Now , The value of a is  : " + a );
document.write("<br>" );
document.write("<br> The value of --a is  : " + --a );
document.write("<br> Now , The value of a is  : " + a );
document.write("<br>" );
document.write("<br> The value of a-- is  : " + a-- );
document.write("<br> Now , The value of a is  : " + a );
document.write("<br>");

// Question 2
// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// Question 3
// Write a program that takes input a name from user &
// greet the user.

var userName = prompt("Enter you name");
document.write("<br> Hello,  " + userName );
document.write("<br>");


// Question 4
// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var num = prompt("Enter a number");
if (num == "") {
  num = 5;
}
document.write("<br> Table of  " + num );
for (var t = 1; t <= 10; t++) {
  document.write("<br>" + num + "x" + t + "=" + num * t);
}

// Question 5
// Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var sub1 = prompt("Enter first subject name");
var sub2 = prompt("Enter second subject name");
var sub3 = prompt("Enter third subject name");
var totalMarks = 100;
var sub1Marks = prompt ("Enter first subject marks");
var sub2Marks = prompt ("Enter second subject marks");
var sub3Marks = prompt ("Enter third subject marks");
var total = sub1Marks + sub2Marks + sub3Marks;
document.write("<br> Total marks" + sub1Marks  + sub2Marks + sub3Marks);
document.write("<br> Total marks" +  total);







