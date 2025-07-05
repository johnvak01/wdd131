let input = document.querySelector("#favchap");
let button = document.querySelector("button");
let list_element = document.querySelector("#list");

let list_item = document.createElement('li');
let delete_item = document.createElement('button');

input.innerHTML= input.value;
delete_item.innerHTML = "❌"

list_item.append(delete_item);

list_element.append(list_item);


