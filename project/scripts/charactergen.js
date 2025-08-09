console.log("chargen script is running");

// Define Roll Tables
let names = [
    "Abram", "Aleksander", "Alexi", "Andrey", "Arkady", "Antony", "Anatoly", "Artur", "Athanasios", "Borys", "Dimitri", "Dominik", "Fyodor", "Grigory", "Giorgy", "Igor", "Illya", "Ivan", "Josef"];

let epithets = [
    "Noble", "Old", "One-Eye", "One-hand/Iron-Hand", "One-leg/Peg-leg", "Peasant", "Pious", "Poor", "Proud", "Pallid", "Quick", "Rash", "Rat", "Red", "Resilient", "Rich/Wealthy", "Right", "Ruthless", "Scholar", "Shadow", "Shrewd", "Shy", "Silent", "Slow", "Snake", "Spider", "Stout", "Strong", "Strongarm", "Tenacious", "Terrible", "Vengeful", "Weak", "White", "Wild", "Wily", "Wise", "Wolf", "Young"];
let planets = ["Vitebsk", "An Ivanovo Colony", "A Chuluu Colony", "Krovengrad", "Xochitl"];
let classes = ["Teamster", "Android", "Scientist", "Marine"];
let motivations = ["Ambition", "Avarice", "Craving", "Curiosity", "Excitement", "Glory", "Hatred", "Piety", "Protection", "Revenge", "Safety"];

let characters = get_characters() || [];

// Grab Elements
const button_rand = document.getElementById("button_rand");
const button_save = document.getElementById("button_save");

const form_name = document.getElementsByName("name");
const form_epithet = document.getElementsByName("epithet");
const form_planet = document.getElementsByName("planet");
const form_class = document.getElementsByName("class");
const form_motivation = document.getElementsByName("motivation");

const characters_display = document.getElementById("saved_characters");

// set event listeners
button_rand.addEventListener("click", randomise_form);
button_save.addEventListener("click", save_character);

// define functions

function get_characters() {
    return JSON.parse(localStorage.getItem("characters"));
}

function reset_list() {
    console.log("resetting the list");
    characters_display.innerHTML = "";
    characters.forEach(character => { display_character(character) });
    return 0;
}
function randomise_form() {
    console.log("randomising the character");
    form_name[0].value = names[Math.floor(Math.random() * names.length)];
    form_epithet[0].value = epithets[Math.floor(Math.random() * epithets.length)];
    form_planet[0].value = planets[Math.floor(Math.random() * planets.length)];
    form_class[0].value = classes[Math.floor(Math.random() * classes.length)];
    form_motivation[0].value = motivations[Math.floor(Math.random() * motivations.length)];

    return 0;
}

function save_character() {
    console.log("saving character to list");

    let new_character = [form_name[0].value, form_epithet[0].value, form_planet[0].value, form_class[0].value, form_motivation[0].value];
    characters.push(new_character);
    console.log(characters);
    localStorage.setItem("characters", JSON.stringify(characters));
    return 0;
}

function display_character(character) {
    let list_item = document.createElement('li');
    let delete_item = document.createElement('button');

    list_item.classList.add("saved-char")
    list_item.innerHTML = `The ${character[3]} character ${character[0]} the "${character[1]}" from ${character[2]} is motivated by ${character[4]}`;
    delete_item.innerHTML = "❌"

    characters_display.append(list_item);
    list_item.append(delete_item);

    delete_item.addEventListener('click', () => {
        characters_display.removeChild(list_item);
        characters = characters.filter((char)=>( character != char));

        localStorage.setItem("characters", JSON.stringify(characters));
        reset_list();        
        form_name[0].focus();
    })
}

// function delete_character(character){
//     chapter = character.slice(0, character.length-1);
//     characters = characters.filter((item)=>{
//     return item != character;    
//     });
//     localStorage.setItem("characters",JSON.stringify(characters));
// }

reset_list();