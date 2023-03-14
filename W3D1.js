// 1. (completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

  function maxOfThree(a, b, c) {
    //&& true if and only if, otherwise false
    if ((a >= b) && (a >= c)) { 
        return a;
    } else if ((b >= a) && (b >= c)) { 
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(574,7897,36));

//3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

function isVowel(argument){

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a','e','i','o','u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

var char = "Z";

if (isVowel(char)) {
	console.log(char + " is a vowel");
} else {
	console.log(char + " is not a vowel");
}

var char = "U";

if (isVowel(char)) {
	console.log(char + " is a vowel");
} else {
	console.log(char + " is not a vowel");
}

//4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

function addNums(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }
  
  console.log(addNums([17,352,73]));

  //5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

  var array =[33, 45, 8, 11],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log(' Product :  ' +p); 

//6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

let sample = function () {
    console.log(arguments.length);
  };
  sample();

  //7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

  function stringReverse(str) {
    var stringSplit = str.split("");
    var reverseArr = stringSplit.reverse();
    var joinArr = reverseArr.join("");
    return joinArr;
 }
 
 console.log(stringReverse("rockstar"));
 
 //8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

 function longest_str_in_array(arra)
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longest_str_in_array(["few", "many", "gargantuan", "little", "more"]));

//9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"]

text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
console.log(text_truncate('Looking forward to summer.',18))
