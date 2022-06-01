let img = ["../assets/img/d10/1.png",
"../assets/img/d10/2.png",
"../assets/img/d10/3.png",
"../assets/img/d10/4.png",
"../assets/img/d10/5.png",
"../assets/img/d10/6.png",
"../assets/img/d10/7.png",
"../assets/img/d10/8.png",
"../assets/img/d10/9.png",
"../assets/img/d10/0.png"];
let $dmgDie = document.querySelector(".die-damage button");
$dmgDie.addEventListener("click", rollDmg);

function rollDmg() {
    $dmgDie.disabled = true;
    if($dmgDie.classList[0] === 'walk') {
        $dmgDie.classList.add("iShake");;
    } else {
        $dmgDie.classList.add("shake");;
    };

    if($dmgDie.classList[0] === 'walk') {
        $dmgDie.classList.remove("walk");
    } else {
        $dmgDie.classList.add("walk");
    };
    setTimeout(()=> {
        $dmgDie.disabled = false;
        $dmgDie.classList.remove("shake");
        $dmgDie.classList.remove("iShake");
        let diceOneValue = Math.floor(Math.random()*10);
        console.log(diceOneValue);
        document.querySelector("#dmgDie").setAttribute("src", img[diceOneValue]);
    },
    2500
    );
};