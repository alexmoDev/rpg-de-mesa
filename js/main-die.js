let images = ["../assets/svg/dice-01.svg",
"../assets/svg/dice-02.svg",
"../assets/svg/dice-03.svg",
"../assets/svg/dice-04.svg",
"../assets/svg/dice-05.svg",
"../assets/svg/dice-06.svg"];
let dice = document.querySelectorAll(".main-die img");
let btn = document.querySelector('#roll');

btn.addEventListener('click', roll);

function roll(){
    dice.forEach(function(die){
        btn.disabled = true;
        die.classList.add("shake");
    });
    setTimeout(function(){
        btn.disabled = false;
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Sua rolagem deu " + ( (dieOneValue +1) + (dieTwoValue + 1) );
    },
    2500
    );
}
roll();