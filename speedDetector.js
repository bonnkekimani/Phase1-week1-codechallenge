function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;
  
    if (speed <= speedLimit) {
      console.log("Ok");
      return;
    }
  
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
    
    if (demeritPoints >= 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
  checkSpeed(90); // Outputs: "Points: 4"

