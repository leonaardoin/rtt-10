class Car{
    static employee="aditya";
    static show(){
        console.log(`Hey my name is ${this.employee}`);
    }
}
const c1= new Car();
Car.show();