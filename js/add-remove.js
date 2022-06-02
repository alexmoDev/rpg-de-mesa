const $new = document.querySelector('#new');
const $delete = document.querySelector('#delete');
const $moves = document.querySelector('.new-moves');

$new.addEventListener('click', ()=> $moves.insertAdjacentHTML('beforeend', '<textarea class="elmnt-input -textarea" placeholder="(^-^)/"></textarea>'));

$delete.addEventListener('click', ()=> $moves.removeChild($moves.lastChild));