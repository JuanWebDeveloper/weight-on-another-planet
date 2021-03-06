let form = document.getElementById('form');
let username = document.getElementById('name');
let weight = document.getElementById('weight');
let validWeight = /^[0-9]*$/;
let planets = document.getElementById('planets');
let calculate = document.getElementById('calculate');
let result = document.getElementById('result');

const gravity = {
    mercurio: 3.7,
    venus: 8.8,
    marte: 3.7,
    jupiter: 24.8,
    saturno: 10.4,
    urano: 8.8,
    neptuno: 11.1,
    pluton: 0.6
};

const resultVariables  = document.documentElement.style;

calculate.addEventListener('click' , () => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    });

    forRancio:
    for (let planet of planets) {
        resultVariables.setProperty('--resultColor', '#FF0D0D');

        if (username.value == "") {
            resultVariables.setProperty('--resultContent', '"Fill in the name field."');
            result.innerHTML = "Fill in the name field.";
            break forRancio;

        } else if (weight.value == "") {
            resultVariables.setProperty('--resultContent', '"Fill in the weight field."');
            result.innerHTML = "Fill in the weight field.";
            break forRancio;

        } else if (!validWeight.test(weight.value)) {
            resultVariables.setProperty('--resultContent', '"Only numbers are allowed for this field."');
            result.innerHTML = "Only numbers are allowed for this field.";
            weight.value = "";
            break forRancio;

        } else if (planets.value == "Planet") {
            resultVariables.setProperty('--resultContent', '"Select a planet"');
            result.innerHTML = "Select a planet";
            break forRancio;
        }

        resultVariables.setProperty('--resultColor', '#14f100');

        if (planet.value == planets.value) {
            let selectedPlanet = planet.value;
            let finalWeight = null;

            switch (selectedPlanet) {
                case "mercurio":
                    finalWeight = parseInt((weight.value * gravity.mercurio)) / 9.8;
                    break;
                case "venus":
                    finalWeight = parseInt((weight.value * gravity.venus)) / 9.8;
                    break;
                case "marte":
                    finalWeight = parseInt((weight.value * gravity.marte)) / 9.8;
                break;
                case "jupiter":
                    finalWeight = parseInt((weight.value * gravity.jupiter)) / 9.8;
                break;
                case "saturno":
                    finalWeight = parseInt((weight.value * gravity.saturno)) / 9.8;
                break;
                case "urano":
                    finalWeight = parseInt((weight.value * gravity.urano)) / 9.8;
                break;
                case "neptuno":
                    finalWeight = parseInt((weight.value * gravity.neptuno)) / 9.8;
                break;
                case "pluton":
                    finalWeight = parseInt((weight.value * gravity.pluton)) / 9.8;
                break;
            }
            
            resultVariables.setProperty('--resultContent', `"Hello ${username.value}, your weight in ${selectedPlanet} is ${finalWeight.toFixed(2)} kg"`);
            result.innerHTML = `Hello ${username.value}, your weight in ${selectedPlanet} is ${finalWeight.toFixed(2)} kg`;
            username.value = "";
            weight.value = "";
            planets.value = "Planet";
            break;
        }
    }

});