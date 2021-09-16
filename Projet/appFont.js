const checkBox = document.getElementById("fontFamily");

chrome.storage.sync.get(['verif'], function (checkTrueOrFalse){
    checkBox.checked = checkTrueOrFalse.verif;
});

checkBox.addEventListener("click", async () => {
    chrome.storage.sync.set({verif : checkBox.checked});
    isChecked()
});

async function isChecked(){
    if (checkBox.checked == true){
        console.log("is the true !")
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageTextFont,
        })
    }else{
        console.log("fallllllse")
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setResetFont,
        })
    }
}

// The body of this function will be executed as a content script inside the
// current page
function setPageTextFont() {
    let globalFont = document.getElementsByTagName('*');
    for (let i = 0; i < globalFont.length; i++) {
        globalFont[i].style.fontFamily = 'Tahoma';
    };
};

function setResetFont() {
    let globalFont = document.getElementsByTagName('*');
    for (let i = 0; i < globalFont.length; i++) {
        globalFont[i].style.fontFamily = null;
    };
};


// SAME FOR BACKGROUND COLOR
let changeBackgroundColor = document.getElementById("color");

chrome.storage.sync.get("color", ({ color }) => {
    changeBackgroundColor.style.backgroundColor = color;
});

changeBackgroundColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = "white";
      });
};

// SAME FOR FONT WEIGHT
let changeStyle = document.getElementById("bold");

chrome.storage.sync.get("bold", ({ bold }) => {
    changeStyle.style.fontWeight = bold;
});

changeStyle.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageStyle,
    });
});

function setPageStyle() {
    var boldText = document.getElementsByTagName('*');
    for (let i = 0; i < boldText.length; i++) {
        boldText[i].style.fontWeight = 'bold';
    };
};

// EN ATTENTE
var titre_H1 = document.getElementsByTagName('h1');
function changeColor() {
    for (let i = 0; i < titre_H1.length; i++) {
        titre_H1[i].style.color = 'green';
    };
};