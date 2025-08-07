// Footer Code
const currentyear_span = document.getElementById("currentyear");
const lastmodified_p = document.getElementById("lastmodified");

let this_year = new Date();

currentyear_span.innerHTML = this_year.getFullYear();
lastmodified_p.innerHTML = document.lastModified;


// Hamburger Menu Code
const menu_button = document.getElementById("menu");
const nav_menu = document.querySelector("nav");

menu_button.addEventListener('click',()=>{
    menu_button.classList.toggle("open");
    nav_menu.classList.toggle("visible");
})