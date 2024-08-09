let car = {
    producer: "Audi",
    color: "grey",
    model: "Q3",
    year: 2021,
    speed: 130, // Numeric value for speed in km/h
    consumption: 5, // Numeric value for consumption in liters per 100 km
}

console.log(car);

car.driver = "Ivan";

console.log(car); // Driver's name is in the list

function timePetrolCost (distance, car) {

    let speed = car.speed;
    let fuelConsumption = car.consumption;  
    let travelTime = distance / speed;
    let numberOfBreaks = Math.floor(travelTime / 4);    
    let totalTime = numberOfBreaks + travelTime;
    let fuelUse = (distance / 100) * fuelConsumption;

    return{
        totalTime: totalTime,
        fuelUse: fuelUse,
    }
}

let distance = 600; // Distance in km

let tripDetails = timePetrolCost(distance, car);

console.log(`Car: ${car.producer} ${car.model}, driven by ${car.driver}`);
console.log(`Total time for the trip: ${tripDetails.totalTime} hours`);
console.log(`Total fuel needed: ${tripDetails.fuelUse} liters`);

alert(`Total time for the trip: ${tripDetails.totalTime} hours`);
alert(`Total fuel needed: ${tripDetails.fuelUse} liters`);


