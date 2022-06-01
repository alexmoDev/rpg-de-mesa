let img8 = ["../assets/img/d4/d4 (1).png",
"../assets/img/d4/d4 (2).png",
"../assets/img/d4/d4 (3).png",
"../assets/img/d4/d4 (4).png"
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
        let diceOneValue8 = Math.floor(Math.random()*4);   
        console.log(diceOneValue8);
        document.querySelector("#dmgDie").setAttribute("src", img8[diceOneValue8]);
    },
    2500
    );
};