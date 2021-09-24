"use strict"

function getRandomTrip(arrayOne){
    let random = Math.random() 
    let randomByArray = random * arrayOne.length;
    let randomByArrayTrim = Math.floor(randomByArray);
    console.log (randomByArrayTrim);

    return arrayOne[randomByArrayTrim]
}

// let animals = ['tiger', 'lion', 'bear', 'whale'];
// let res = getRandomThing(animals);
// alert(res)

// function destination(arrayOfDestination){
    
    
//     console.log(random);
//     return arrayOfDestination[random];    
// }

// function restaurant(arrayOfRestaurant){

//     let random2 = Math.floor(Math.random() * (3 - 0 + 1) ) + 0;
//     console.log(random2);
//     return arrayOfRestaurant[random2];
// }

// function transport(arrayOfTransport){
//     let random3 = Math.floor(Math.random() * (3-0 +1) ) + 0;
//     console.log(random3);
//     return arrayOfTransport[random3];
// }

// function entertainment(arrayOfEntertainment){
//     let random4 = Math.floor(Math.random() * (3 -0 +1)) +0;
//     console.log(random4);
//     return arrayOfEntertainment[random4];
//}


let places = ['Anchorage','New York', 'Honolulu','Seatle'];
let result = getRandomTrip(places)
console.log (result)

let dinning = ['Landaurys', 'Cabos', 'McDonolds', 'Chuys'];
let result2 = getRandomTrip(dinning);
console.log (result2);

let trans = ['Bus', 'Plane', 'Ship', 'Car'];
let result3 = getRandomTrip(trans);
console.log (result3)

let fun = ['Hiking', 'Bungee Jumping', 'Cliff Diving', 'Site Seeing']
let result4 = getRandomTrip(fun);
console.log (result4)

alert (`Your day trip will be to ${result}. \nYou will be dinning at ${result2}. \nYour mode of transportation will be by ${result3}. \nYou will be entertained by ${result4}`)