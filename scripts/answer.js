

export function SetupAnswer() {
    var answerElem = document.getElementById('answer');
    if (answerElem.addEventListener) {
        answerElem.addEventListener('input', () => {CheckSentence(answerElem)}, false); // need to wrap this in another function otherwise I cannot pass paramters into it
      } else if (answerElem.attachEvent) { // for less sane browsers
        answerElem.attachEvent('onpropertychange', () => {console.log("value:" + answerElem.value)}, false)
    }
}

function CheckSentence(answerElem) {
    var sentence = answerElem.value;
    return console.log("value: " + sentence)
}
