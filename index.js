/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityKmH = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // time in seconds (1 hour)
const initialDistanceKm = 0; // initial distance (km)
const remainingFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgs = 0.5; // fuel burn rate (kg/s)

// Convert velocity from km/h to m/s for calculation
const initialVelocityMs = initialVelocityKmH * (1000 / 3600);

// Function to calculate new velocity
function calcNewVelocity(velocity, acceleration, time) {
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
      throw new Error('Invalid input: velocity, acceleration, and time must be numbers');
  }
  return velocity + (acceleration * time);
}

// Calculate new velocity in m/s and convert back to km/h
const newVelocityMs = calcNewVelocity(initialVelocityMs, accelerationMs2, timeSeconds);
const newVelocityKmH = newVelocityMs * (3600 / 1000);


const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






