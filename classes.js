/*class car{
    // constructor(){
    //     console.log("Inside the constructor");
    // }
}
const myCar1 = new car();
const myCar2 = new car();*/

class students{
    constructor(name, year){
        console.log("Inside the constructor");
        this.name=name;
        this.year=year;
     }
}
const mystudents1 = new students("Gaurav", 2023);
const mystudents2 = new students("Krushna", 2023);
console.log(mystudents1.name)
console.log(mystudents2.name)