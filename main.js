// pull input fields into js using their id
const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

//create function to round to nearest hundredth, apply function to temp values
function roundNum(num) {
    return Math.round(num*100)/100;
}

//create function Celcius to Fahrenheit to Kelvin
function celciusToFahrenheitAndKelvin() {
    //store the input in a variable; convert string to float
    const cTemp = parseFloat(celciusInput.value);
    //convert to fahrenheit, store in variable
    const fTemp = (cTemp * (9/5)) + 32;
    //convert to kelvin, store in variable; 
    const kTemp = cTemp + 273.15;
    //show value on page in input box
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);

}

//create function Fahrenheit to Celcius & Kelvin
function fahrenheitToCelciusAndKelvin() {
    //store the input in a variable; convert string to float
    const fTemp = parseFloat(fahrenheitInput.value);
    //convert to celcius, store in variable
    const cTemp = (fTemp - 32) * (5/9);
    //convert to kelvin, store in variable; 
    const kTemp = (fTemp + 459.67) * (5/9);
    // //show value on page in input boxes
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

//create function Kelvin to Celcius & Fahrenheit
function kelvinToCelciusAndFahrenheit() {
    //store the input in a variable; convert string to float
    const kTemp = parseFloat(kelvinInput.value);
    //convert to celcius, store in variable
    const cTemp = kTemp - 273.15;
    //convert to Fahrenheit, store in variable 
    const fTemp = ((9/5) * (kTemp - 273) + 32);
    // //show value on page in input boxes
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}



//create function to attach event listner for when user types input, call the functions
function main() {
celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);
}

//call main function
main();
