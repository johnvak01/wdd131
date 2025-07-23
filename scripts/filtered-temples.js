const currentyear_span = document.getElementById("currentyear");
const lastmodified_p = document.getElementById("lastmodified");

let this_year = new Date();

currentyear_span.innerHTML = this_year.getFullYear();
lastmodified_p.innerHTML = document.lastModified;

// Hamburger menu code

const menu_button = document.getElementById("menu");
const nav_menu = document.querySelector("nav");

menu_button.addEventListener('click',()=>{
    menu_button.classList.toggle("open");
    nav_menu.classList.toggle("visible");
})

//filter Assignment code
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
      templeName: "Bountiful Utah Temple",
      location: "Bountiful, UT, United States",
      dedicated: "1982, May, 2",
      area: 104000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-58567.jpg"
    },
    {
      templeName: "Atlanta Georgia Temple",
      location: "Atlanta, Georgia, United States",
      dedicated: "1983, June, 1",
      area: 34500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-3859.jpg"
    },
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1853, February, 14",
      area: 382207,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-4946.jpg"
    } 
];

main_element = document.querySelector("main");
filter_toold_button= document.getElementById("filter-toold");
filter_tonew_button= document.getElementById("filter-tonew");
filter_tolarge_button= document.getElementById("filter-tolarge");
filter_tosmall_button= document.getElementById("filter-tosmall");
filter_todefault_button= document.getElementById("filter-todefault");

filter_todefault_button.addEventListener("click",()=>{
    set_temples(temples);
});

filter_toold_button.addEventListener("click",()=>{
    temple_list = temples.filter((temple)=>{
        return temple.dedicated.indexOf("19") == -1 && temple.dedicated.indexOf("20") == -1;
    });
    set_temples(temple_list);
});

filter_tonew_button.addEventListener("click",()=>{
    temple_list = temples.filter((temple)=>{
        return temple.dedicated.indexOf("19") != -1 || temple.dedicated.indexOf("20") != -1;
    });
    set_temples(temple_list);
});

filter_tolarge_button.addEventListener("click",()=>{
    temple_list = temples.filter((temple)=>{
        return temple.area>90000;
    });
    set_temples(temple_list);
});
filter_tosmall_button.addEventListener("click",()=>{
    temple_list = temples.filter((temple)=>{
        return temple.area<10000;
    });
    set_temples(temple_list);
});

function main_reset(){
    main_element.innerHTML = `<h1>Temple</h1><h2>Photos</h2>`;
}

function set_temples(selected_temples){
    main_reset(); 
    for (let temple of selected_temples){
        let temple_card = document.createElement("figure");
        temple_card.innerHTML =`
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>${temple.templeName} Temple</figcaption>
            <div class="data">
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} ft^2</p>
            </div>
            `;
    main_element.appendChild(temple_card);
    }
}


set_temples(temples);