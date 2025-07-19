const currentyear_span = document.getElementById("currentyear");
const lastmodified_p = document.getElementById("lastmodified");

let this_year = new Date();

currentyear_span.innerHTML = this_year.getFullYear();
lastmodified_p.innerHTML = document.lastModified;

// Calculate Weather Values

let temperature = 24;
let windspeed = 5;
let conditions = "Partly Cloudy";


const temp_element = document.getElementById("temp-value");
const conditions_element = document.getElementById("conditions-value");
const wind_element = document.getElementById("wind-value");
const windchill_element = document.getElementById("windchill-value");

temp_element.innerHTML = temperature + " C";
wind_element.innerHTML = windspeed + " km/h";

function calculateWindChill(temp, wind){
    return 13.12 + 0.6215*temp -11.37*(wind^0.16) +0.3965*temp*(wind^0.16)
}

if(temperature<=10 && windspeed > 4.8){
    windchill_element.innerHTML = calculateWindChill(temperature, windspeed);
} else{
    windchill_element.innerHTML = "N/A";
}

