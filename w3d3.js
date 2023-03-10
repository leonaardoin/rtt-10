//===================Governor========================
class Governor {
    constructor(state, timeInOffice, constituents){
        this.state=state;
        this.timeInOffice=timeInOffice;
        this.constituents=constituents;
    }
        static state= "State served"
        static timeInOffice= "Years Served"
        static constituents= "State Population"

    }
    console.log(Governor.state);
    console.log(Governor.timeInOffice);
    console.log(Governor.constituents);
    

//==============Postal Workers & Chefs===============

class Person{
    constructor(name, age, eyes, height){
        this.name= name;
        this.age= age;
        this.eyes= eyes;
        this.height= height;
    }
eat(){
    console.log(this.name + 'eats food.');
}
walk(){
    console.log(this.name + 'walks several miles a day');
}
wears(){
    console.log(this.name + 'wears glasses over their' + this.eyes + 'eyes.');
}
}

let erica= new Person('Erica', '19', 'brown', '5 feet');

erica.eat();
erica.walk();
erica.wears();

class PostalWorker extends Person {
    constructor(name, age, eyes, height, city, neighborhood) {
    super(name, age, eyes, height, city, neighborhood);
    this.job = ["delivers", "drives"];
}
work (){
    console.log('I work in Atlanta');
}
job (){
    console.log('I deliver mail all day long');
}
}

const james= new PostalWorker("James", 45, "brown", "6 feet", "Atlanta", "Five Points")
james.work("James");

const jessica= new PostalWorker("Jessica", 33, "hazel", "4 feet", "Atlanta", "Dunwoody")
jessica.work("Jessica");

class Chef extends Person {
constructor(name, age, eyes, height, restaurant, cuisine){
super(name, age, eyes, height, restaurant, cuisine);
this.job=["prep", "cook"];
}
cook(){
    console.log("I'm a chef");
}
prep (){
    console.log("I prepare all the food before it is cooked.");
}
}
const betty= new Chef("Betty", 27, "blue", "5 feet", "McDonald's", "Marietta")
betty.cook("Betty");

const david= new Chef("David", 37, "brown", "7 feet", "Spondivits", "East Point")
david.prep("David");