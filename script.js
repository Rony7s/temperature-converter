const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

function resetOthers(active) {
  if (active !== "c") celsiusInput.value = "";
  if (active !== "f") fahrenheitInput.value = "";
  if (active !== "k") kelvinInput.value = "";
}

// Celsius input handler
celsiusInput.addEventListener("input", function () {
  const c = parseFloat(this.value);

  if (isNaN(c)) {
    resetOthers();
    return;
  }

  const f = (c * 9) / 5 + 32;
  const k = c + 273.15;

  fahrenheitInput.value = f.toFixed(2);
  kelvinInput.value = k.toFixed(2);
});

// Fahrenheit input handler
fahrenheitInput.addEventListener("input", function () {
  const f = parseFloat(this.value);

  if (isNaN(f)) {
    resetOthers();
    return;
  }

  const c = (f - 32) * 5 / 9;
  const k = c + 273.15;

  celsiusInput.value = c.toFixed(2);
  kelvinInput.value = k.toFixed(2);
});

// Kelvin input handler
kelvinInput.addEventListener("input", function () {
  const k = parseFloat(this.value);

  if (isNaN(k)) {
    resetOthers();
    return;
  }

  const c = k - 273.15;
  const f = (c * 9) / 5 + 32;

  celsiusInput.value = c.toFixed(2);
  fahrenheitInput.value = f.toFixed(2);
});