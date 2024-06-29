import { KANJITWO } from "./data.js";

const kanjiLength = KANJITWO.length;

function generateRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}

function ArrTwo() {
    /* Gets kanji from kanjiTwo for JAPN3040 */
    console.log("function has been called")
    let out = "";

    let i = 0; 
    let appended = [];

    while (i < 4) {
        // this random is not actually random
        let j = generateRandom(kanjiLength);
        console.log(j);

        // make sure you dont have duplicate numbers
        if (appended.includes(j) == false) {
            appended.push(i);
            out += KANJITWO[j] + " ";
            i++;
        }
    }

    return out.trim();
}

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

// document.getElementById("body__kanji").onclick = generate();

// get a var that keeps track of whether we are on JAPN3010 or JAPN3030

