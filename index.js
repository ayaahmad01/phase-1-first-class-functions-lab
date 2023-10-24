// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
return drivers.slice(0,2)
}
const returnLastTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    return function(fare) {
        return fare*x
    }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
  return driversToReturn(drivers);
};