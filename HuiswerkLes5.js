let caughtPokemon = ["Pikachu"];
let allPokemon = ["Ivysaur", "Psyduck", "Pikachu", "Dugtrio", "Conkeldurr"];

input.buttonA.onEvent(ButtonEvent.Click, function () {
    catchPokemon();
});

function catchPokemon() {
    let randomNumber = Math.randomRange(0, allPokemon.length - 1);
    console.log(allPokemon[randomNumber]);
    caughtPokemon.push(allPokemon[randomNumber]);
    console.log(caughtPokemon.length);
}

input.buttonB.onEvent(ButtonEvent.Click, function () {
   console.log(caughtPokemon); 
});
