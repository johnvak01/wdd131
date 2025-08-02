const currentyear_span = document.getElementById("currentyear");
const lastmodified_p = document.getElementById("lastmodified");

let this_year = new Date();

currentyear_span.innerHTML = this_year.getFullYear();
lastmodified_p.innerHTML = document.lastModified;

// counter control
const counter = document.getElementById("form_result_counter");
let storage = JSON.parse(localStorage.getItem("results_counter")) || 0;

counter.innerHTML = storage+1;

localStorage.setItem("results_counter", storage+1);



