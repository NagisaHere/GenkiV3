import { GRAMMARTWO, CHAPTERLIST } from "../data/data.js";
import { KANJIDATA } from "../data/newdata.js";

var kanjiLength = 0
var KANJIPOOL = []

// build kanji based off settings
function initialiseSettings() {
    for (let chapter in CHAPTERLIST) {
        window.localStorage.setItem(CHAPTERLIST[chapter], "1");
    }

    console.log("settings has been intiialised")
}

// this is not being run at all
function loadSettings() {
    // if there is a null, run initialiseSettings
    
    KANJIPOOL = []
    currArray = []

    // smoke test
    

    const temp = localStorage.getItem("ch15");
    if (temp != "1" || temp != "0") {
        initialiseSettings();
        console.log("called from here")
    }

    for (let chapter in CHAPTERLIST) {
        const item = window.localStorage.getItem(CHAPTERLIST[chapter]);
        console.log(item)
        if (item == "1") {
            // add json
            KANJIPOOL = KANJIPOOL.concat(KANJIDATA[CHAPTERLIST[chapter]])
            console.log(`added chapter ${CHAPTERLIST[chapter]}`)
        } else if (item == "0") {
            continue;
        }
    }

    console.log("settings has been loaded.")
    kanjiLength = KANJIPOOL.length
}

loadSettings()


function generateRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}

var darkMode = false
var currArray = KANJIPOOL

function FetchKanji() {
    console.log("function has been called")
    let i = 0; 
    let appendedIndex = [];
    let appended = [];

    // seems to time out here? Could be stuck in infinite while loop for whatever reason?
    while (i < 4) {
        // this j is most likely why it could be bad
        let j = generateRandom(kanjiLength-1);
        // console.log(j);
        let elem = currArray[j]

        // make sure you dont have duplicate numbers
        if (appendedIndex.includes(j) == false) {
            appendedIndex.push(j);  // add index to appended
            appended.push(elem);
            i++;
        }
    }

    return appended
}

// Generate Kanji Button
let button1 = document.getElementById('generate');

button1.addEventListener('click', () => {
    ChangeKanji();
})

function ChangeKanji() {
    // clear the current body
    var kanjiContainer = document.getElementById("kanji__container")
    kanjiContainer.innerHTML = ""

    const ans = FetchKanji();
    console.log(ans);

    // try split the string and create an element to store it in body
    for (let kanji in ans) {
        let kanjiElement = document.createElement("a");
        kanjiElement.id = "kanji__element";
        kanjiElement.innerHTML = ans[kanji];
        kanjiElement.href = 'https://jisho.org/search/' + ans[kanji]
        kanjiElement.target = '_blank'

        // add a hyperlink

        kanjiContainer.appendChild(kanjiElement)
    }
    
}

// fancy ripple effect
const btns = document.querySelectorAll(".btn-ripple");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x_coord = e.clientX;
    let y_coord = e.clientY;

    let btn_top_pos = e.target.offsetTop;
    let btn_left_pos = e.target.offsetLeft;

    let x = x_coord - btn_left_pos;
    let y = y_coord - btn_top_pos;

    const span = document.createElement("span");
    span.classList.add("ripple");
    span.style.top = `${y}px`;
    span.style.left = `${x}px`;

    this.appendChild(span);

    setTimeout(() => this.removeChild(span), 500);
  });
});


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

    // manually set font size
    elem.style.fontSize = '25px';
    elem.style.cursor = 'pointer';

    elem.addEventListener('click', () => {
        console.log(chapter + " has been clicked");

        // clear all the other colours
        for (let chapterTwo in chapterIndexes) {
            // could try get the parent?
            var tempElem = document.getElementById(chapterTwo);
            // make grey
            tempElem.parentElement.style.backgroundColor = '#d3d3d3';
        }

        // change current to blue
        console.log("hello from " + chapter);
        
        // display text
        let grammarContainer = document.getElementById("grammar__container");

        // clear all html elements
        grammarContainer.innerHTML = "";

        console.log(GRAMMARTWO[chapter])

        // attempt to create element
        for (let grammarText in GRAMMARTWO[chapter]) {
            let grammarElement = document.createElement("p");
            grammarElement.id = "grammar__content";

            // why is this accessed like this? I have no idea
            grammarElement.innerHTML = GRAMMARTWO[chapter][grammarText];

            grammarContainer.appendChild(grammarElement);
        }

        // only ch23 is stored in elem from memory
        // but chapter still gets updated
        var currElem = document.getElementById(chapter);

        // set blue
        currElem.parentElement.style.backgroundColor = '#c7e752';

        // retrieve all the grammar from

        // update chapterdisplay__content
        // var content = document.getElementsByClassName("chapterdisplay__content");


    })
}

