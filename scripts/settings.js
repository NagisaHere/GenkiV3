const testChapter = document.getElementById("ch15");


const saveButton = document.getElementById("save__button");

// only the ones that are toggled on should get submitted
saveButton.addEventListener("click", () => {
    if (testChapter.checked == true) {
        console.log("value of ch15 is " + testChapter.value);
    } else {
        console.log("ch15 has not been cheked");
    }
    
})