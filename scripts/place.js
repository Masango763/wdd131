// ==========================================================================
// FOOTER DYNAMIC DATES
// ==========================================================================
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ==========================================================================
// WIND CHILL CALCULATIONS ENGINE
// ==========================================================================

// 1. Grab baseline static text values from the HTML DOM elements
const tempElement = document.getElementById("temperature");
const windElement = document.getElementById("windspeed");
const windChillElement = document.getElementById("windchill");

const t = parseFloat(tempElement.textContent);
const v = parseFloat(windElement.textContent);

/**
 * Requirement: Write a function named "calculateWindChill" that returns 
 * the wind chill factor using exactly ONE line of code.
 * Formula optimized for Metric units (°C and km/h).
 */
const calculateWindChill = (temp, speed) => (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1) + " °C";

// 2. Rubric condition validation check before execution
// Metric Limit Rules: Temperature must be <= 10 °C AND Wind Speed must be > 4.8 km/h
if (t <= 10 && v > 4.8) {
    windChillElement.textContent = calculateWindChill(t, v);
} else {
    windChillElement.textContent = "N/A";
}