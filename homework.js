//Homework Function Drills

// 1 . ) Write a function that outputs the sum of the first and the last index of an array.
// ex => var sampleArray = [1,2,3,4,5] 
// expected output =>  sum = 6
const array = [1,2,3,4,5];
var startInd=0;
var endInd=4;
console.log(array[startInd]+array[endInd]);

// 2. Write a JavaScript program to find the leap years in a given range of years. 
function leap_year_range(st_year, end_year) {
   var year_range = [];
   for (var i = st_year; i <= end_year; i++)
   {
        year_range.push(i);
   }
   var new_array = [];
year_range.forEach(
function(year)
{ 
  if (test_LeapYear(year)) 
  new_array.push(year);
});
return new_array;
}
//conditions to figure out the leap year
function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
           return year;
   } else {
           return false;
   }
}
console.log(leap_year_range(1980,2000));

// 3. Write a JavaScript function to sort the following array of objects by title value.
//  var library = [ 
    // { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    // { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    // { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    // ];
    var library = [ 
      { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
      { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
      { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
      ];
   //sorting array by the titles
   function compare_to_sort(x,y) 
    {
     if (x.title < y.title)
       return -1;
     if (x.title > y.title)
       return 1;
     return 0;
    }
   console.log(library.sort(compare_to_sort));

 // 4. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
 // Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18

function test(arr_mix) {
   var total = 0;
   for(var i=0;i<=arr_mix.length;i++){
     if (typeof arr_mix[i] === "number")
       total=total+arr_mix[i];
   }
 return total; 
 }
 arr_mix = [2,"11",3,"a2",false,5,7,1]
 console.log("Original array: "+arr_mix)
 console.log("Sum all numbers of the said array: "+test(arr_mix));
 arr_mix = [2,3,0,5,7,8,true,false]
 console.log("Original array: "+arr_mix)
 console.log("Sum all numbers of the said array: "+test(arr_mix));

// 5. You will be given an array of drinks, with each drink being an object with two properties: name and price. 
   // Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
   // Assume that the following array of drink objects needs to be sorted:
//    drinks = [
//     {name: "lemonade", price: 50},
//     {name: "lime", price: 10}
//   ]
//   example output =>
//   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

let drinks = [
   {name: "lemonade", price: 50},
   {name: "lime", price: 10},
   {name: "pineapple", price: 25},
   {name: "ginger", price: 65},
 ];
 //sort for ascending drink price a>b 
 console.log(drinks.sort((a, b) => (a.price > b.price) ? 1 : -1));

 

