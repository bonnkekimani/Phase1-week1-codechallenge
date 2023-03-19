// This is the speedDetector.js file 

function checkSpeed(speed) {
// Initialized and declared speedLimit and kmPerDemerit
    const speedLimit = 70;
    const kmPerDemerit = 5;
//To print ok if speed is less than speedLimit
    if (speed <= speedLimit) {
      console.log("Ok");
      return;
    }
  
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
//To print License suspended if the driver gets more than 12 points, meaning 12 in inclusive.   
    if (demeritPoints >= 12) {
      console.log("License suspended");
//To print the number of points if the driver gets less than 12 points, meaning 12 in exclusive.   
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
  // To run this program,you call the checkSpeed() function with the speed of the car as an argument,
  checkSpeed(90); // Outputs: "Points: 4"

