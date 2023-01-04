function compareTime(timeString1, timeString2) {
  let arrivalTime = new Date(timeString1).getTime();
  let departureTime = new Date(timeString2).getTime();
  return arrivalTime > departureTime;
}

module.exports = {
  compareTime,
};
