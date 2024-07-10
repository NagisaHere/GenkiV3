import { KANJITWO } from "./data.js";

const kanjiLength = KANJITWO.length;

function generateRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}

// OLD
// function ToggleRare() {
//     if (disableRare == false) {
//         disableRare = true;
//     }
//     else {
//         disableRare = false;
//     }
// }

var disableRare = false

function ArrTwo() {
    /* Gets kanji from kanjiTwo for JAPN3040 */
    console.log("function has been called")
    let out = "";

    let i = 0; 
    let appended = [];

    while (i < 4) {
        let j = generateRandom(kanjiLength);
        // console.log(j);
        let elem = KANJITWO[j]

        if (disableRare && elem.includes('rare')) {
            continue;
        }

        // make sure you dont have duplicate numbers
        if (appended.includes(j) == false) {
            appended.push(i);  // add index to appended
            out += elem + " ";
            i++;
        }
    }

    return out.trim();
}

// Generate Kanji Button
let button1 = document.getElementById('generate');

button1.addEventListener('click', () => {
    ChangeKanji();
})

function ChangeKanji() {
    const ans = ArrTwo();
    console.log(ans);
    document.getElementById("body__kanji").innerHTML = ans;
}

// tester function
console.log(ArrTwo());

// Toggle Rare switch
// using getElementsByClassName actuall returns all child elements
// I should be trying to retrieve type checkbox instead

var toggleRare = document.getElementById("togglerare")

// code used to look at the state of disableRare in console
toggleRare.addEventListener('click', () => {
    disableRare = toggleRare.checked
    console.log(disableRare);
})

