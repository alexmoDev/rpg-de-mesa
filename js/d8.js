let img8 = ["../assets/img/d8/d8 (1).png",
"../assets/img/d8/d8 (2).png",
"../assets/img/d8/d8 (3).png",
"../assets/img/d8/d8 (4).png",
"../assets/img/d8/d8 (5).png",
"../assets/img/d8/d8 (6).png",
"../assets/img/d8/d8 (7).png",
"../assets/img/d8/d8 (8).png"
];
let $dmgDie8 = document.querySelector(".die-damage button");
$dmgDie8.addEventListener("click", rollDmg8);

function rollDmg8() {
    $dmgDie8.disabled = true;
    if($dmgDie8.classList[0] === 'walk') {
        $dmgDie8.classList.add("iShake");;
    } else {
        $dmgDie8.classList.add("shake");;
    };

    if($dmgDie8.classList[0] === 'walk') {
        $dmgDie8.classList.remove("walk");
    } else {
        $dmgDie8.classList.add("walk");
    };
    setTimeout(()=> {
        $dmgDie8.disabled = false;
        $dmgDie8.classList.remove("shake");
        $dmgDie8.classList.remove("iShake");
        let diceOneValue8 = Math.floor(Math.random()*8);   
        console.log(diceOneValue8);
        document.querySelector("#dmgDie").setAttribute("src", img8[diceOneValue8]);
    },
    2500
    );
};