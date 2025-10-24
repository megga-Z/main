const celsiusE = document.getElementById('celsius');
const fahraniatE = document.getElementById('fahraniat');
const kelvinE = document.getElementById('kelvin');

function computeTemp(event) {
    const currentValue = +event.target.value;

    switch (event.target.name) {
        case 'celsius':
            fahraniatE.value = (currentValue * 1.8 + 32).toFixed(2);
            kelvinE.value = (currentValue + 273).toFixed(2);
            break;

        case 'fahraniat':
            celsiusE.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinE.value = ((currentValue - 32) / 1.8 + 273).toFixed(2);
            break;

        case 'kelvin':
            celsiusE.value = (currentValue - 273).toFixed(2);
            fahraniatE.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;

        default:
            break;
    }
}