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

// Calculate new distance in km
const newDistanceKm = initialDistanceKm + (initialVelocityKmH * (timeSeconds / 3600));


// Calculate remaining fuel
const fuelConsumedKg = fuelBurnRateKgs * timeSeconds;
const newRemainingFuelKg = remainingFuelKg - fuelConsumedKg;

console.log(`Corrected New Velocity: ${newVelocityKmH.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistanceKm.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${newRemainingFuelKg.toFixed(2)} kg`);






