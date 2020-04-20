///////////////////////////////////////
// Lecture: Hoisting

//FUNCTIONS
calcAge(100);
function calcAge(age){
    console.log(2019-age);
}

// calcAge(100);
// typr(10);

var typr = function(year){
    console.log(2009-year)
}

// typr(10);

//VARIABLES
console.log(age);
var age = 10;
// console.log(age);












///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









