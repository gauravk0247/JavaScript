// var season='winter';

// switch(season){
//     case 'summer':
//         console.log("it is too hot outside");
//         break;
//     case 'winter':
//         console.log("it is too cold outside");
//         break;
//     case 'spring':
//         console.log("I love this weather");
//         break;
//     default:
//         console.log("it wheather is perfect");
//         break;
// }

// var season=3;

// switch(season){
//     case 1:
//         console.log("it is too hot outside");
//         break;
//     case 2:
//         console.log("it is too cold outside");
//         break;
//     case 3:
//         console.log("I love this weather");
//         break;
//     default:
//         console.log("it wheather is perfect");
//         break;
// }

// var season=3.5;

// switch(season){
//     case 1.5:
//         console.log("it is too hot outside");
//         break;
//     case 2.5:
//         console.log("it is too cold outside");
//         break;
//     case 3.5:
//         console.log("I love this weather");
//         break;
//     default:
//         console.log("it wheather is perfect");
//         break;
// }


// when we not initialzed the value of var then we have to use undefined case label in switch then print the undefined
var season=null;

switch(season){
    case true:
        console.log("it is too hot outside");
        break;
    case undefined:
        console.log("it is too cold outside");
        break;
    case false:
        console.log("I love this weather");
        break;
    case null:
        console.log("I do not love this weather");
        break;
    default:
        console.log("it wheather is perfect");
        break;
}