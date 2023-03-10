//create class w/ class declaration 
class Cat {
  constructor(name, age, color){
    this.name= name;
    this.age= age;
    this.color= color;
    }
    sayName () {
        return `Hi My Name is ${this.name}`
        }
    sayAge () {
        return `,I am ${this.age}`
        }
    sayColor() {
        return `and I am ${this.color}. Please adopt me.`
        }
    }


let samantha = new Cat('samantha', 10, 'orange');
console.log(samantha);

const olivia= new Cat ('olivia', 7, 'black')
console.log(olivia);
console.log(olivia.sayName(), olivia.sayAge(), olivia.sayColor())


class Pirate {
    constructor(name, ship, yearsAsPirate){
      this.name= name;
      this.ship= ship;
      this.yearsAsPirate= yearsAsPirate;
      }
      giveName () {
          return `Argh My Name is ${this.name}`
          }
      giveShip () {
          return `, I sail on the ${this.ship}`
          }
      giveYearsAsPirate() {
          return `and I been workin' as a Pirate for ${this.yearsAsPirate} years, so...BEWARE!!`
            }
      }
  
  
  let jackSparrow = new Pirate("Jack Sparrow", "Jolly Roger", 10);
  console.log(jackSparrow);
  console.log(jackSparrow.giveName(), jackSparrow.giveShip(), jackSparrow.giveYearsAsPirate())
  
  let patchyThePirate= new Pirate ("Patchy the Pirate", "Black Pearl", 20);
  console.log(patchyThePirate);
  console.log(patchyThePirate.giveName(), patchyThePirate.giveShip(), patchyThePirate.giveYearsAsPirate())

  for (let i = 0; i < jackSparrow.length; i++) {
    console.log(jackSparrow[i]);
  }

  for (let i = 0; i < patchyThePirate.length; i++) {
    console.log(patchyThePirate[i]);
  }