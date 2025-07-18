const currentyear_span = document.getElementById("currentyear");
const lastmodified_p = document.getElementById("lastmodified");

let this_year = new Date();

currentyear_span.innerHTML = this_year.getFullYear();
lastmodified_p.innerHTML = document.lastModified;