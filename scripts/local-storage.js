// inputs
const $nameInp = document.querySelector("#name-inp");
const $forcaInp = document.querySelector("#forca-inp");
const $forInp = document.querySelector("#for-inp");
const $fracoInp = document.querySelector("#fraco-inp");
const $destrezaInp = document.querySelector("#destreza-inp");
const $desInp = document.querySelector("#des-inp");
const $tremuloInp = document.querySelector("#tremulo-inp");
const $constInp = document.querySelector("#const-inp");
const $conInp = document.querySelector("#con-inp");
const $doenteInp = document.querySelector("#doente-inp");
const $inteliInp = document.querySelector("#inteli-inp");
const $intInp = document.querySelector("#int-inp");
const $grogueInp = document.querySelector("#grogue-inp");
const $sabedoriaInp = document.querySelector("#sabedoria-inp");
const $sabInp = document.querySelector("#sab-inp");
const $confusoInp = document.querySelector("#confuso-inp");
const $carismaInp = document.querySelector("#carisma-inp");
const $carInp = document.querySelector("#car-inp");
const $marcadoInp = document.querySelector("#marcado-inp");
const $levelInp = document.querySelector("#level-inp");
const $xpInp = document.querySelector("#xp-inp");
const $pvAtualInp = document.querySelector("#pvAtual-inp");
const $pvMaxInp = document.querySelector("#pvMax-inp");
const $armorInp = document.querySelector("#armor-inp");
const $coinInp = document.querySelector("#coin-inp");
const $cargaAtualInp = document.querySelector("#cargaAtual-inp");
const $cargaMaxInp = document.querySelector("#cargaMax-inp");
//text-areas
const $lookTxt = document.querySelector("#look-txt");
const $notesTxt = document.querySelector("#notes-txt");
const $vinculosTxt = document.querySelector("#vinculos-txt");
const $equipTxt = document.querySelector("#equip-txt");
const $movesTxt = document.querySelector("#moves-txt");

const $save = document.querySelector('#save');

let inputsVoid = [
    $nameInp,
    $forcaInp,
    $forInp,
    $destrezaInp,
    $desInp,
    $constInp,
    $conInp,
    $inteliInp,
    $intInp,
    $sabedoriaInp,
    $sabInp,
    $carismaInp,
    $carInp,
    $levelInp,
    $xpInp,
    $pvAtualInp,
    $pvMaxInp,
    $armorInp,
    $coinInp,
    $cargaAtualInp,
    $cargaMaxInp
];
let indexVoid = 0;
for(let i = 0; i < inputsVoid.length; i++) {
    inputsVoid[indexVoid].value = localStorage.getItem(indexVoid) || inputsVoid[indexVoid].value;
    indexVoid++;
};

let checkVoid = [
    $fracoInp,
    $tremuloInp,
    $doenteInp,
    $grogueInp,
    $confusoInp,
    $marcadoInp
];
let indexCheckVoid = 0;
for (let i = 0; i < checkVoid.length; i++) {
    function isBoolean() { 
        if (localStorage.getItem(indexCheckVoid + 'check') == "true") { 
           return true;
        } else { 
           return false;
        };
    }
    checkVoid[indexCheckVoid].checked = isBoolean();
    indexCheckVoid++;
}

let textAreasVoid = [
    $lookTxt,
    $notesTxt,
    $vinculosTxt,
    $equipTxt,
    $movesTxt
];
let indexTxtVoid = 0;
for (let i = 0; i < textAreasVoid.length; i++) {
    textAreasVoid[indexTxtVoid].value = localStorage.getItem(indexTxtVoid + 'txt') || textAreasVoid[indexTxtVoid].value;
    indexTxtVoid++;
}

for (let i = 0; i < parseInt(localStorage.getItem('movesLength')); i++) {
    function addMove(event) {
        let $moves = document.querySelector('#moves');
        $moves.insertAdjacentHTML('beforeend', '<textarea class="input-text -border -dark -small"></textarea>');
    };
    addMove();
}

let $movements = document.querySelectorAll('#moves textarea');
let indexMoveVoid = 0;
for (let i=0; i < $movements.length; i++) {
    $movements[indexMoveVoid].value = localStorage.getItem(indexMoveVoid + 'move');
    indexMoveVoid++;
};

$save.addEventListener('click', salvarData);

function salvarData(event) {

    let inputs = [
        $nameInp.value,
        $forcaInp.value,
        $forInp.value,
        $destrezaInp.value,
        $desInp.value,
        $constInp.value,
        $conInp.value,
        $inteliInp.value,
        $intInp.value,
        $sabedoriaInp.value,
        $sabInp.value,
        $carismaInp.value,
        $carInp.value,
        $levelInp.value,
        $xpInp.value,
        $pvAtualInp.value,
        $pvMaxInp.value,
        $armorInp.value,
        $coinInp.value,
        $cargaAtualInp.value,
        $cargaMaxInp.value
    ];

    let index = 0;
    for(let i = 0; i < inputs.length; i++) {
        localStorage.setItem(index, inputs[index]);
        index++;
    };
    saveCheck();
    saveTxt();
    saveMoves();
};

function saveCheck() {
    let check = [
        $fracoInp.checked,
        $tremuloInp.checked,
        $doenteInp.checked,
        $grogueInp.checked,
        $confusoInp.checked,
        $marcadoInp.checked
    ]

    let indexCheck = 0;
    for (let i=0; i < check.length; i++) {
        localStorage.setItem(indexCheck + 'check', check[indexCheck]);
        indexCheck++;
    };
};

function saveTxt() {
    let textAreas = [
        $lookTxt.value,
        $notesTxt.value,
        $vinculosTxt.value,
        $equipTxt.value,
        $movesTxt.value
    ];

    let indexTxt = 0;
    for (let i=0; i < textAreas.length; i++) {
        localStorage.setItem(indexTxt + 'txt', textAreas[indexTxt]);
        indexTxt++;
    };
};

function saveMoves() {
    let $movements = document.querySelectorAll('#moves textarea');
    localStorage.setItem('movesLength', $movements.length);

    let indexMove = 0;
    for (let i=0; i < $movements.length; i++) {
        localStorage.setItem(indexMove + 'move', $movements[indexMove].value);
        indexMove++;
    };
}