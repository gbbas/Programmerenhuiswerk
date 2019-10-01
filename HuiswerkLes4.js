/*
  Code voorbeeld programmeerles 4 in week 1.5.
  hierbij ook een uitbreiding voor de gene die al vooruit willen werken.
  voor hulp of uitleg of verbeteringen ben ik berijkbaar op discord (Gebr: AMN).
*/

//loops en arrays
// een array of lijst opzetten en hier uit een bepaalde naam halen d.m.v index.
let array = ["Mario", "Luigi", "Peach", "Toad"];
console.log(`It's a me, ${array[0]}!`);

// spacer voor duidelijkere console log
console.log(".");

// een willekeurige naam uit een array kiezen
let RandomNmr = Math.randomRange(0, array.length - 1);
console.log(array[RandomNmr]);

console.log(".");

// een for loop die de eerste vier namen uit een array uitleest
for (let i = 0; i < 4; i++) {
    console.log(array[i]);
}

console.log(".");

// het toevoegen van nieuwe dingen aan een array op twee manieren
array.push("Wario");
array[5] = "Waluigi";
console.log(array);

console.log(".");

// een for loop die alle namen uit een array leest
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log(".");

// functies
// Volgende week

// EXTRA !!!
// advanced: een 2d array uitgelezen in console log
let array2d: any[][] = 
[
    ["Goede characters","Mario","Luigi","Peach"],
    ["Vijanden","Goomba","Koopa","Shy guy"],
    ["Power-ups","Mushroom","Fire Flower", "Ice Flower"]
];
for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {
        console.log(array2d[i][j]);
    }
}
