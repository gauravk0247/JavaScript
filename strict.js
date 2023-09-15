function square(number){
    return number*number;
}
var sq = square(6);
console.log(sq)

// Add Two number and return the addition
function addNumber(num1, num2){
    return num1+num2;
}
var ad = addNumber(10, 20)
console.log(ad)

distance(100, 5)
distance(60, 5)
function distance(speed, time){
    console.log(speed*time)
}

// hosting condition
var distance = function(speed, time){
    console.log(speed*time);
}
distance(30, 5)
distance(60, 5)