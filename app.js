"use strict"

// Random Selection Calculation
function getRandomTrip(arrayOne){
    let random = Math.random() 
    let randomByArray = random * arrayOne.length;
    let randomByArrayTrim = Math.floor(randomByArray);
    console.log (randomByArrayTrim);

    return arrayOne[randomByArrayTrim]
}

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

// Arrays for each event
function getDayTrip(){

    let places = ['Anchorage, AK','New York, NY', 'Honolulu, HI', 'Seatle, WA'];
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
    alert (`Your Day Trip will be to ${result}. \nYou will be Dinning at ${result2}. \nYour Mode of Transportation will be by ${result3} . \nYou will be Entertained by ${result4}.`)

// While Loop asking if user likes selections
    let userResponse = prompt ("Are you happy with the Selection? Yes or No?");
    while(userResponse === "no" || userResponse === "No" || userResponse === "NO" || userResponse === "n"){
        result = getRandomTrip(places);
            console.log(result);
        result2 = getRandomTrip(dinning);
            console.log(result2);
        result3 = getRandomTrip(trans);
            console.log(result3);
        result4 = getRandomTrip(fun);
            console.log(result4);
            //Out put of new selctions if response is no
            alert (`Your NEW Day Trip will be to ${result}. \nYou will be Dinning at ${result2}\nYour Mde of Transportation will be by ${result3} . \nYou will be Entertained by ${result4}.`)
            userResponse = prompt ("Are you happy with this new selection?");
        
    }
    if (userResponse === "yes"|| userResponse === "Yes" || userResponse === "YES");
        console.log("Trip Complete")
        alert (`CONGRATULATIONS! Your Day Trip is set: \nYou will be Traveling to ${result}. \nYou will be Dinning at ${result2}\nYour Mode of Transportation will be by ${result3} . \nYou will be Entertained by ${result4}.`)
        //else (userResponse){
            //prompt ("Please enter Yes or No");
        
}
//Call Function of Arrays
getDayTrip();

