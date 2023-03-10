// Function Declaration
// function sayHello(name) {
//     console.log('Hello ' + name + '!');
// }

// sayHello("Leona")

// Function Expression
// const sayHello = function(name) {
//     console.log('Hello' + name + '!')
// }
// sayHello("Leona")

// Function Declaration
//function areBothEven(n1, n2) {
//     return !(n1 % 2) && !(n2 % 2);
//   }

// function areBothEven(n1, n2){
//     return !(n1%2) && !(n2%2);
// }
// console.log (areBothEven(8,4))

//area of rectangle find width of __ and height of__ is __square units

// const width=prompt ('triangle width: ');
// const height=prompt ('triangle height');

//return true if you planet argument is either earth or mars, otherwise false
//**function not displaying false need to add to lowercase to function
// let x1="earth";
// let x2="MARS";

// function planetHasWater(x1, x2){
//     return !(x1%2) && !(x2%2);
// }
// console.log (planetHasWater('jupiter,VENUS'))

// function bottleCapper(bottle,cap){
//     return bottle + cap
// }
// console.log(bottleCapper("green bottle", "white cap"))

//Rest Parameters
// function getDevObject(name) {
//     let skills = [];
//     for (let i = 1; i < arguments.length; i++) {
//       skills.push(arguments[i]);
//     }
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }
//   console.log(getDevObject("Leona", "HTML", "CSS", "Javascript"))

//Default Parameters
//   function setColor(bicycle, color) {
// 	// set color to 'purple' if not provided
// 	bicycle.color = color || 'purple';
// }
//Now, using default parameters, we can do this:
// const bike = new Bicycle();
// setColor(bike, 'blue');  // sets color to blue
// setColor(bike);  // sets color to purple by default

// function setColor(bicycle, color = 'purple') {
// 	bicycle.color = color;
// }

//Anonymous Function
//     //forEach method (array method that will perform that function for each item in array). since function is not being called again we don't need to give it a name. don't need to call the function because it is being called because we called the method and the function doesn't have a name (anonymous)
//     var colors = ['red', 'green', 'blue'];
// //var colors is the array NOT the name of the function, this is a global scope
// colors.forEach(function(color) {
//   console.log(color);
// });

//Nesting Functions
// function openNewAccount(name, openingBalance) {
//     let acctNum = generateAcctNum();
  
//     // createAccount is a function available outside this function
//     let acct = createAccount(acctNum, openingBalance);
//     return acct;
  
//     // helper function that provides a unique account number
//     function generateAcctNum() {
//       return Date.now();  // super amazing algorithm :)
//     }
//   }

//Recursions: a function that calls itself (kind of like a loop)

// function sayHello() {
//     console.log('hello');
//     sayHello();
// }
// sayHello()

// function printXTimes(n) {// the base case: the condition that will stop the recursive function
//     if (n < 0) return; // the action
//     console.log(`${n} more prints to go`);// the recursive call
//     printXTimes(n - 1); //the new argument
// }
// printXTimes(4) //calling the function


