

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier) {
    return function fareMultiplier (fare) {
        return fare * multiplier
    }
}

function fareDoubler (fare) {
    return createFareMultiplier(2)(fare)
}

function fareTripler (fare) {
    return createFareMultiplier(3)(fare)
}

let selectDifferentDrivers = (drivers,fn) => {
    return fn(drivers)
}



// code
// let returnFirstTwoDrivers = (names) => {
//     return names.slice(0,2);
// }

// let returnLastTwoDrivers = (names) => {
//     return names.slice(2,4);
// }

// let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier (multiplier) {
//     return function fareMultiplier (fare) {
//         return fare * multiplier;
//     }
// }

// let fairDoubler = () => {return createFareMultiplier(2)};