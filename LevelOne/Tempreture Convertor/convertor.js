let selectedConversion = '';

function selectConversion(conversion) {
  selectedConversion = conversion;
  const conversionButtons = document.getElementsByClassName('conversion-button');
  for (let i = 0; i < conversionButtons.length; i++) {
    conversionButtons[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function convertTemperature() {
  // Get user input
  const temperatureInput = document.getElementById('temperatureInput').value.trim();
  
  // Validate input
  if (isNaN(temperatureInput)) {
    alert('Please enter a valid temperature.');
    return;
  }
  
  // Perform temperature conversion
  let convertedTemperature;
  let resultUnit;
  
  if (selectedConversion === 'fahrenheit_to_celsius') {
    convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
    resultUnit = 'Celsius';
  } else if (selectedConversion === 'celsius_to_fahrenheit') {
    convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
    resultUnit = 'Fahrenheit';
  } else if (selectedConversion === 'kelvin_to_celsius') {
    convertedTemperature = parseFloat(temperatureInput) - 273.15;
    resultUnit = 'Celsius';
  } else if (selectedConversion === 'celsius_to_kelvin') {
    convertedTemperature = parseFloat(temperatureInput) + 273.15;
    resultUnit = 'Kelvin';
  } else if (selectedConversion === 'kelvin_to_fahrenheit') {
    convertedTemperature = (parseFloat(temperatureInput) - 273.15) * 9/5 + 32;
    resultUnit = 'Fahrenheit';
  } else if (selectedConversion === 'fahrenheit_to_kelvin') {
    convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9 + 273.15;
    resultUnit = 'Kelvin';
  }
  
  // Display the converted temperature
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.textContent = `${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
function clearDisplay() {
    document.getElementById('temperatureInput').value = '';
    document.getElementById('resultContainer').textContent = '';
  }