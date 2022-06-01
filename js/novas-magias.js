const $nova = document.querySelector('#nova');
const $remover = document.querySelector('#remover');
const $magia = document.querySelector('#magia');

$nova.addEventListener('click', ()=> $magia.insertAdjacentHTML('beforeend', '<textarea class="input-text -textarea" placeholder="(^-^)/"></textarea>'));

$remover.addEventListener('click', ()=> $magia.removeChild($magia.lastChild));