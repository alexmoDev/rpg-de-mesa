let $new = document.querySelector('#new');
let $remove = document.querySelector('#delete');
let $moves = document.querySelector('#moves');

$new.addEventListener('click', addMove);

function addMove(event) {
    event.preventDefault();
    $moves.insertAdjacentHTML('beforeend', '<textarea class="input-text -border -dark -small" id=""></textarea>');
}

$remove.addEventListener('click', removeMove);

function removeMove(event) {
    event.preventDefault();
    $moves.removeChild($moves.lastChild);
}