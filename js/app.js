console.log("Welcome to notes app this is app.js");
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    // console.log("Hello nireeksh");
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

function showNotes() {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <a id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
          </div>
        </div>
        `;


    });


    let notesElm = document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`
        There is no note to display. Use 'Add a note' to add some notes.        
        `
    }
}

function deleteNote(index) {
   // console.log('will delete this index',index);
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

let search =document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
    let cardTxt = element.getElementByTagName("p")[0].innerText;
        if(cardText.includes(inputVal)){
        element.style.display = "block";
           
        }
        else{
        element.style.display = "none";
        }
    })

})
