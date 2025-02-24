import { CHAPTERLIST } from "../data/data.js";


const testChapter = document.getElementById("ch15");
const chapterContainer = document.getElementsByClassName("chapter__container");


const saveButton = document.getElementById("save__button");

function initialiseSettings() {
    for (let chapter in CHAPTERLIST) {
        localStorage.setItem(chapter, "1");
    }
}

function loadSettings() {
    // if there is a null, run initialiseSettings
    for (let chapter in CHAPTERLIST) {
        var tempChapter = document.getElementById(CHAPTERLIST[chapter]);
        const item = localStorage.getItem(CHAPTERLIST[chapter]);
        if (item == "1") {
            tempChapter.checked = true;
        } else if (item == "0") {
            tempChapter.checked = false;
        } else {
            // null; intialise settings
            initialiseSettings();
            console.log("settings has been intialised.")
            return;
        }
    }

    console.log("settings has been loaded.")
}


loadSettings()

// only the ones that are toggled on should get submitted
saveButton.addEventListener("click", () => {
    // for (let chapterMenu in chapterContainer.children) {
    //     for (let chapterItem in chapterMenu.children) {
    //         // write logic here
    //         var checkbox = chapterItem[0];
    //         if (checkbox.checked == true) {
    //             console.log(`value is ${checkbox.id}`);
    //         } else {
    //             console.log(`value ${checkbox.id} is not checked`);
    //         }
    //     }
    // }

    for (let chapter in CHAPTERLIST) {
        var checkbox = document.getElementById(CHAPTERLIST[chapter]);
        
        if (checkbox.checked == true) {
            console.log(`value is ${checkbox.id}`);
            localStorage.setItem(CHAPTERLIST[chapter], "1")
        } else {
            localStorage.setItem(CHAPTERLIST[chapter], "0")
            console.log(`value ${checkbox.id} is not checked`);
        }
    }


    // if (testChapter.checked == true) {
        
    //     localStorage.setItem(testChapter.value, "1")
    // } else {
    //     console.log("ch15 has not been checked");
    // }
    
})


