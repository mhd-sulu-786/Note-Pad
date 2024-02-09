
let adder = document.getElementById('add-btn');
let Title = document.getElementById('FormControlInput1');
let text = document.getElementById('exampleFormControlTextarea1');
let main_bar = document.getElementById('mainbar');
// let screen =document.getElementById('Files');
let head;
let notes_value;
let count = -1;
let notes = [];

adder.addEventListener('click', creater);

function creater() {
    if (!Title || !Title.value.trim()) {
        alert("Title cannot be empty");
        return; // Exit the function if Title is invalid
    }
    for (let i = 0; i < count; i++) {
        if (notes[i].head == Title.value) {
            alert("This title already exists.");
            return;

        }

    }
    count++;
    notes[count] = {
        head: Title.value,
        notes_value: text.value
    }
    // console.log(notes);
    document.getElementById('Files').innerHTML += `<option  onclick="SHOW(${count})" class="btn btn-dark" >${notes[count].head}</option>`;
    Title.value = '';
    text.value = '';
}

function changeFunc() {
    var selectBox = document.getElementById('Files');
    var value = selectBox.value;


    SHOW(value);
   }

   function SHOW(value) {
    for (let i = 0; i <= count; i++) {
        if (notes[i].head == value) {
            Title.value = notes[i].head;
            text.value = notes[i].notes_value;
            break; // Once we found the matching note, we can exit the loop
        }
    }
}


