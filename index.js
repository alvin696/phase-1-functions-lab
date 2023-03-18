
// This function calculates the distance from the pickup location to the company headquarters in blocks
function distanceFromHqInBlocks(pickupLocation) {
    let hqLocation = 42;
    let distanceInBlocks = Math.abs(hqLocation - pickupLocation);
    return distanceInBlocks;
  }
  
  // This function calculates the distance from the pickup location to the company headquarters in feet
  function distanceFromHqInFeet(pickupLocation) {
    let distanceInFeet = distanceFromHqInBlocks(pickupLocation) * 264;
    return distanceInFeet;
  }
  
  // This function calculates the distance travelled in feet between the pickup location and the dropoff location
  function distanceTravelledInFeet(pickupLocation, dropoffLocation) {
    let distanceInFeet = Math.abs(dropoffLocation - pickupLocation) * 264;
    return distanceInFeet;
  }
  
  // This function calculates the fare price based on the distance travelled
  function calculatesFarePrice(pickupLocation, dropoffLocation) {
    let distanceInFeet = distanceTravelledInFeet(pickupLocation, dropoffLocation);
    let farePrice;
  
    if (distanceInFeet <= 400) {
      farePrice = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      farePrice = 25;
    } else if (distanceInFeet > 2500) {
      farePrice = 'cannot travel that far';
    }
  
    return farePrice;
  }
  