let img = ["../assets/img/1.png",
"../assets/img/2.png",
"../assets/img/3.png",
"../assets/img/4.png",
"../assets/img/5.png",
"../assets/img/6.png",
"../assets/img/7.png",
"../assets/img/8.png",
"../assets/img/9.png",
"../assets/img/0.png"];
let dmgDice = document.querySelector(".die-damage button");
let dmgDie = document.querySelector("button");

function rollDmg(event){
    if (event !== undefined) {
    event.preventDefault();
    }
    dmgDice.classList.add("shake");

    setTimeout(function(){
        dmgDice.classList.remove("shake");
        let diceOneValue = Math.floor(Math.random()*10);
        console.log(diceOneValue);
        document.querySelector("#falcon").setAttribute("src", img[diceOneValue]);
    },
    1000
    );
}
rollDmg();
dmgDie.addEventListener("click", rollDmg);