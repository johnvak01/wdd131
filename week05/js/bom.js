let input = document.querySelector("#favchap");
let button = document.querySelector("button");
let list_element = document.querySelector("#list");

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter); 
});


button.addEventListener('click', ()=>{
    if (input.value != ""){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function getChapterList(){
    return JSON.parse(localStorage.getItem('myBOMList'));
}

function setChapterList(){
    localStorage.setItem('myBOMList',JSON.stringify(chaptersArray));
    return 0;
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length-1);
    chaptersArray = chaptersArray.filter((item)=>{
    return item != chapter;    
    });
    setChapterList();
}

function displayList(item){
    console.log("button clicked");
    if(item.trim() == ''){
        alert("Please Provide Something to Add");
    }
    else{
        
        let list_item = document.createElement('li');
        let delete_item = document.createElement('button');
        
        list_item.innerHTML = item;
        delete_item.innerHTML = "❌"

        list_element.append(list_item);
        list_item.append(delete_item);
        
        delete_item.addEventListener('click', ()=>{
            list_element.removeChild(list_item);
            input.focus();
            deleteChapter(list_item.textContent);
        })
    }
}