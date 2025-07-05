let input = document.querySelector("#favchap");
let button = document.querySelector("button");
let list_element = document.querySelector("#list");


button.addEventListener('click', ()=>{
    console.log("button clicked");
    if(input.value.trim() == ''){
        alert("Please Provide Something to Add");
    }
    else{
        let list_item = document.createElement('li');
        let delete_item = document.createElement('button');
        
        list_item.innerHTML = input.value;
        delete_item.innerHTML = "❌"

        list_element.append(list_item);
        list_item.append(delete_item);
        
        delete_item.addEventListener('click', ()=>{
            list_element.removeChild(list_item);
            input.focus();
        })
    }
    input.value="";
    input.focus();
});