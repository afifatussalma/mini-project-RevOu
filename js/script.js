document.addEventListener('DOMContentLoaded', function () {
    const temperatureForm = document.getElementById('temperature-form');
    const conversionResult = document.getElementById('conversion-result');
    const explanation = document.getElementById('explanation');

    temperatureForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const temperature = parseFloat(document.getElementById('temperature').value);
        const toFahrenheit = document.getElementById('toFahrenheit').checked;

        if (isNaN(temperature)) {
            alert("Masukkan suhu yang valid.");
            return;
        }

        if (toFahrenheit) {
            const fahrenheit = (temperature * 9/5) + 32;
            conversionResult.textContent = `${fahrenheit} Fahrenheit`;
            explanation.textContent = `${temperature} Celsius sama dengan ${fahrenheit} Fahrenheit.`;
        } else {
            const celsius = (temperature - 32) * 5/9;
            conversionResult.textContent = `${celsius} Celsius`;
            explanation.textContent = `${temperature} Fahrenheit sama dengan ${celsius} Celsius.`;
        }
    });
});
