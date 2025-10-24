const inputValue = document.getElementById('input-value');
const convertBtn = document.getElementById('convert-btn');
const lengthEl = document.getElementById('results-1');
const volumeEl = document.getElementById('results-2');
const massEl = document.getElementById('results-3');

const meterToFeet = 3.28084;
const literToGallon = 0.264172;
const kilogramToPound = 2.20462;

function convertUnits() {
    const value = parseFloat(inputValue.value);
    
    if (!isNaN(value)) {
        const meters = value;
        const feet = value * meterToFeet;
        lengthEl.textContent = `${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${(meters/meterToFeet).toFixed(3)} meters`;

        const liters = value;
        const gallons = value * literToGallon;
        volumeEl.textContent = `${value} liters = ${gallons.toFixed(3)} gallons | ${value} gallons = ${(liters/literToGallon).toFixed(3)} liters`;

        const kilograms = value;
        const pounds = value * kilogramToPound;
        massEl.textContent = `${value} kilograms = ${pounds.toFixed(3)} pounds | ${value} pounds = ${(kilograms/kilogramToPound).toFixed(3)} kilograms`;
    }
}
convertBtn.addEventListener('click', convertUnits);
inputValue.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertUnits();
    }
});