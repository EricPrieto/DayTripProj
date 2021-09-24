"use strict"


function destination(arrayOfDestination){
    
    let random = Math.floor(Math.random() * (3 - 0 + 1) ) + 0;
    console.log(random);
    return arrayOfDestination[random];    
}

function restaurant(arrayOfRestaurant){

    let random2 = Math.floor(Math.random() * (3 - 0 + 1) ) + 0;
    console.log(random2);
    return arrayOfRestaurant[random2];
}


let places = ['Anchorage','New York', 'Honolulu','Seatle'];
let result = destination(places);
console.log (result)

let dinning = ['Landaurys', 'Cabos', 'McDonolds', 'Chuys'];
let result2 = restaurant(dinning);
console.log (result2);
