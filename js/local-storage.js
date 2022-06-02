const $input = document.querySelectorAll('.elmnt-input');
const $checkbox = document.querySelectorAll('.checkbox');
const $addMoves = document.querySelector('.new-moves');
const $addMagia = document.querySelector('#magia');
const $saveBtn = document.querySelector('.save-btn');

$input.forEach((element, index)=> element.value = localStorage.getItem('input '+index) || element.value);

$checkbox.forEach((element, index)=> element.checked = boolean(element, index));

for (let i= 0; i< parseInt(localStorage.getItem('moves')); i++) {
    $addMoves.insertAdjacentHTML('beforeend', '<textarea class="elmnt-input -textarea" placeholder="(^-^)"></textarea>');
};
for (let i= 0; i< parseInt(localStorage.getItem('magia')); i++) {
    $addMagia.insertAdjacentHTML('beforeend', '<textarea class="elmnt-input -textarea" placeholder="(^-^)"></textarea>');
};

let $newMoves = document.querySelectorAll('.new-moves textarea');
let $newMagia = document.querySelectorAll('#magia textarea');

$newMoves.forEach((element, index)=> element.value = localStorage.getItem('newMove '+index) || element.value);
$newMagia.forEach((element, index)=> element.value = localStorage.getItem('newMagia '+index) || element.value);

function boolean(element, index) {
    if(checkboxGetItem(element, index) !== 'true') {
        return false;
    } else {
        return true;
    };
};

function checkboxGetItem(element, index) {
    let boolean = localStorage.getItem('checkbox '+index);
    return boolean;
}

$saveBtn.addEventListener('click', ()=> {
    storeInput();
    storeCheckbox();
    storeMoves();
    storeMagia();
});

function storeInput() {
    $input.forEach((element, index)=> localStorage.setItem('input '+index, element.value));
};

function storeCheckbox() {
    $checkbox.forEach((element, index)=> localStorage.setItem('checkbox '+index, element.checked));
};

function storeMoves() {
    $newMoves = document.querySelectorAll('.new-moves textarea');
    $newMoves.forEach((element, index) => {
        localStorage.setItem('moves', $newMoves.length);
        localStorage.setItem('newMove '+index, element.value);
    });
};

function storeMagia() {
    $newMagia = document.querySelectorAll('#magia textarea');
    $newMagia.forEach((element, index) => {
        localStorage.setItem('magia', $newMagia.length);
        localStorage.setItem('newMagia '+index, element.value);
    });
};