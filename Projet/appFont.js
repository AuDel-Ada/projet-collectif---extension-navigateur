// Initialize button with user's preferred color
let changeTextFont = document.getElementById("font");

chrome.storage.sync.get("font", ({ font }) => {
    changeTextFont.style.fontFamily = font;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeTextFont.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageTextFont,
    });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageTextFont() {
    var globalFont = document.getElementsByTagName('*');
    for (let i = 0; i < globalFont.length; i++) {
        globalFont[i].style.fontFamily = 'Tahoma';
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
        document.body.style.backgroundColor = "yellow";
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