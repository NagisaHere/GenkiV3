import { KANJITWO } from "./data.js";

const kanjiLength = KANJITWO.length;

function generateRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}

var darkMode = false
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
            appended.push(j);  // add index to appended
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


// ----------------------
// select chapter button
// ----------------------

// this only adds the clicks to the menu
// pretty sure it cannot distinguish between chapters (yay)


var chapterIndexes = {
    "Ch20": 0,
    "Ch21": 0,
    "Ch22": 0,
    "Ch23": 0
}

let chapter_length = Object.getOwnPropertyNames(chapterIndexes).length;

// initialise event listeners
for (let chapter in chapterIndexes) {

    // var chapter = chapterIndexes[chapter]; // this only accesses the value
    console.log(chapter); // I have no idea why this is only doing it twice
    var elem = document.getElementById(chapter);

    elem.addEventListener('click', () => {
        console.log(chapter + " has been clicked");

        // clear all the other colours

        for (let chapterTwo in chapterIndexes) {
            var tempElem = document.getElementById(chapterTwo);
            tempElem.style.backgroundColor = 'red';  /// apparently colour not defined??
        }

        // change current to blue
        elem.style.backgroundColor = 'blue';

    })
}


/* OLD 
/ var chapter = document.getElementsByClassName("chapterselector__item")[chapterIndex];

// this adds the click listener to the whooole thing
// need it to be for every chapter instead
// get a for loop to do it? then store their on/off values in
// a dictonary in the format of {'ChXX': 0 (off)}
// chapter.addEventListener('click', () => {
//     console.log("Chapter 20 has been pressed");
//     // grab the id of the chapter?


//     chapter.style.color = 'blue';
//     // var selectedchapter = document.getElementByID
// })
*/