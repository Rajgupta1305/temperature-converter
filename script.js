// ==============================
// Get HTML Elements
// ==============================

const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");

const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

// ==============================
// Celsius Conversion
// ==============================

function convertFromCelsius(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  return {
    first: `Fahrenheit : ${fahrenheit.toFixed(2)} °F`,
    second: `Kelvin : ${kelvin.toFixed(2)} K`,
  };
}

// ==============================
// Fahrenheit Conversion
// ==============================

function convertFromFahrenheit(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  const kelvin = celsius + 273.15;

  return {
    first: `Celsius : ${celsius.toFixed(2)} °C`,
    second: `Kelvin : ${kelvin.toFixed(2)} K`,
  };
}

// ==============================
// Kelvin Conversion
// ==============================

function convertFromKelvin(kelvin) {
  const celsius = kelvin - 273.15;
  const fahrenheit = (celsius * 9) / 5 + 32;

  return {
    first: `Celsius : ${celsius.toFixed(2)} °C`,
    second: `Fahrenheit : ${fahrenheit.toFixed(2)} °F`,
  };
}

// ==============================
// Display Results
// ==============================

function displayResults(data) {
  result1.textContent = data.first;
  result2.textContent = data.second;
}

// ==============================
// Main Function
// ==============================

function convertTemperature() {
  const value = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  // Empty input validation
  if (isNaN(value)) {
    alert("Please enter a temperature.");

    return;
  }

  // Kelvin validation
  if (unit === "K" && value < 0) {
    alert("Kelvin temperature cannot be below 0.");

    return;
  }

  let convertedData;

  switch (unit) {
    case "C":
      convertedData = convertFromCelsius(value);
      break;

    case "F":
      convertedData = convertFromFahrenheit(value);
      break;

    case "K":
      convertedData = convertFromKelvin(value);
      break;
  }

  displayResults(convertedData);
}

// ==============================
// Events
// ==============================

convertButton.addEventListener("click", convertTemperature);

// Press Enter to Convert

temperatureInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    convertTemperature();
  }
});
