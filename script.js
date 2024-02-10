
let adder = document.getElementById('add-btn');
let Title = document.getElementById('FormControlInput1');
let text = document.getElementById('exampleFormControlTextarea1');
let main_bar = document.getElementById('mainbar');
let clear_btn = document.getElementById('Clear');
let del_btn = document.getElementById('delete');
let update_btn = document.getElementById('update');
// let screen =document.getElementById('Files');
let head;
let notes_value;
let count = -1;
let notes = [];
let del_val;
let selet_note = false;
adder.addEventListener('click', creater);
clear_btn.addEventListener('click', clear);
del_btn.addEventListener('click', del);
update_btn.addEventListener('click', update);

function creater() {
    if (!Title || !Title.value.trim()) {
        alert("Title cannot be empty");
        return; // Exit the function if Title is invalid
    }
    if (selet_note === true) {
        update();
        return;
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
    document.getElementById('Files').innerHTML += `<option id="${notes[count].head}" onclick="SHOW(${count})" class="btn btn-dark" >${notes[count].head}</option>`;
    clear()
    selet_note = false;
}

function changeFunc() {
    var selectBox = document.getElementById('Files');
    var value = selectBox.value;


    SHOW(value);
}

function SHOW(value) {
    selet_note = true;
    for (let i = 0; i <= count; i++) {
        if (notes[i].head == value) {
            Title.value = notes[i].head;
            text.value = notes[i].notes_value;
            del_val = i;
            del_btn.style.display = 'block';
            update_btn.style.display = 'block';
            break; // Once we found the matching note, we can exit the loop
        }
    }
}
function clear() {
    Title.value = '';
    text.value = '';
}

function del() {
    selet_note = false;

    clear();
    for (let i = del_val; i < count; i++) {
        notes[i] = notes[i + 1];

    }
    count = count - 1;
    var x = document.getElementById('Files');
    x.remove(x.selectedIndex);
    selet_note = false;
    var x = document.getElementById('Files');
    x.value=1;
}
function update() {
    if (!Title || !Title.value.trim()) {
        alert("Title cannot be empty");
        return; // Exit the function if Title is invalid
    }
    notes[del_val].head = Title.value;
    notes[del_val].notes_value = text.value;
    clear();
    selet_note = false;
    var x = document.getElementById('Files');
    x.value=1;

}



