const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
const C = document.querySelector('.C')
const F = document.querySelector('.F')

const swap = () => {
    if (C.innerHTML === 'Â°C') {
        C.innerHTML = 'Â°F';
        F.innerHTML = 'Â°C';
        document.title = "Converter Â°F to Â°C";
        converter.placeholder = "Â°F";

    } else {
        F.innerHTML = 'Â°F';
        C.innerHTML = 'Â°C';
        document.title = "Converter Â°C to Â°F";
        converter.placeholder = "Â°C";
    };
};

const reset = () => {
    converter.value = '';
    result.innerHTML = '';
}

const convert = () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        result.style.color = "yellow"
        if (C.innerHTML === 'Â°C') {
            let value = (converter.value * 1.8) + 32;
            result.innerHTML = `${converter.value}Â°C to ${value.toFixed(2)}Â°F`;
        } else {
            let value = (converter.value - 32) / 1.8;
            result.innerHTML = `${converter.value}Â°F to ${value.toFixed(2)}Â°C`;
        }
    } else if (converter.value == '') {
        result.style.color = "#993300"
        result.innerHTML = 'Write correct value!';
    } else {
        result.style.color = "#993300"
        result.innerHTML = 'Wrong value!';
    }
}

changeButton.addEventListener('click', swap);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);
