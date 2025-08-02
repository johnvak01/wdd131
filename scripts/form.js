const currentyear_span = document.getElementById("currentyear");
const lastmodified_p = document.getElementById("lastmodified");

let this_year = new Date();

currentyear_span.innerHTML = this_year.getFullYear();
lastmodified_p.innerHTML = document.lastModified;
// Assignment code
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Enabling Options

const selection_list = document.getElementById("form_product");

function list_reset() {
  selection_list.innerHTML = `<option disabled selected value=\"\">Select a Product ...</option>`;
}

function set_products(selected_products){
    list_reset(); 
    for (let product of selected_products){
        let product_card = document.createElement("option");
        product_card.innerHTML =`<option value="${product.id}">${product.name}</option>`;
    selection_list.appendChild(product_card);
    }
}
set_products(products);
// 