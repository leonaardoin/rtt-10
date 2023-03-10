// //=================================================
// //                     OBJECTS
// // =================================================

// // Create an object and call it human. Add a name, age, and location property. Give the properties values.

// const human= {
// 	name: "Harry",
// 	age: "47",
// 	location: "Mexico"
// }

// // Access the name using dot notation
// console.log(human.name)

// // Use object destructuring to access location Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// let location = human.location;
// console.log(location)

// // ACCESS Granted

// const bulbasaur = {
//   name: 'Bulbasaur',
//   abilities: [
//     {
//       ability: 'overgrow'
//     },
//     {
//       ability: 'chlorophyll'
//     }
//   ],
//   moves: ['razor-wind', 'swords-dance', 'cut'],
//   sound: function () {
//     console.log('Bulbahhhh!!!!!')
//   }
// }

// // Print overgrow
// console.log(bulbasaur.abilities[0].ability)

// // Print cut
// console.log(bulbasaur.moves[2]);

// // Print Bulbahhhh!!!!!
// console.log('Bulbahhh!!!!!')


// // Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
// bulbasaur.height = 7;
// console.log(bulbasaur.height);

// // Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
// // bulbasaur[order1]


// // Print an array that contains every single properties in bulbasaur
// Object.keys(bulbasaur).forEach(bulbasaur => console.log(bulbasaur))


// Print every single property one by one in the console
// let arr= ["name", "abilities", "moves", "sound", "height"];

// for(let i = 0; i < arr.length; i++){
// 	console.log(arr[i]);
//}

// Print an array that contains every single value in bulbasaur
// console.log(object.values(bulbasaur))

// const cohort = {
// 	id: 'SEIR Flex Madeline',
// 	students: ['Diana', 'Julio', 'Cory'],
// 	instructors: ['Arthur', 'Nando', 'Teo', 'Sean'],
// 	addStudent: function(name) {
// 	  name = name[0].toUpperCase() + name.substr(1).toLowerCase();
// 	  this.students.push(name);
// 	},
// 	pickRandomStudent: function() {
// 	  const rndIdx = Math.floor(Math.random() * this.students.length);
// 	  return this.students[rndIdx];
// 	}
//   };
//   console.log(cohort.students)