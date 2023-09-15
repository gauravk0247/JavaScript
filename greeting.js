
var greeting = "Hii"; //global

function change(){
    var greeting = "Hello"; //local
    console.log(greeting);
}
console.log(greeting);
change();
console.log(greeting);