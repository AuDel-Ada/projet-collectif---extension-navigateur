const boxFont = document.getElementById("fontFamily");

chrome.storage.sync.get(['verif'], function (checkTrueOrFalse) {
    boxFont.checked = checkTrueOrFalse.verif;
});

boxFont.addEventListener("click", async () => {
    chrome.storage.sync.set({ verif: boxFont.checked });
    isChecked();
});

async function isChecked() {
    if (boxFont.checked == true) {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setPageTextFont,
        })
    } else {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setResetTextFont,
        })
    }
};

function setPageTextFont() {
    let globalFont = document.getElementsByTagName('*');
    for (let i = 0; i < globalFont.length; i++) {
        globalFont[i].style.fontFamily = 'Tahoma';
    };
};

function setResetTextFont() {
    let globalFont = document.getElementsByTagName('*');
    for (let i = 0; i < globalFont.length; i++) {
        globalFont[i].style.fontFamily = null;
    };
};

const boxBackgroundColor = document.getElementById("color");

chrome.storage.sync.get(['verif'], function (checkTrueOrFalse) {
    boxBackgroundColor.checked = checkTrueOrFalse.verif;
});

boxBackgroundColor.addEventListener("click", async () => {
    chrome.storage.sync.set({ verif: boxBackgroundColor.checked });
    isCheckedBackgroundColor();
});

async function isCheckedBackgroundColor() {
    if (boxBackgroundColor.checked == true) {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setPageBackgroundColor,
        })
    } else {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setResetBackgroundColor,
        })
    }
};

function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = "white";
    });
};

function setResetBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = null;
    });
};

const changeStyle = document.getElementById("bold");

chrome.storage.sync.get(['verif'], function (checkTrueOrFalse) {
    changeStyle.checked = checkTrueOrFalse.verif;
});

changeStyle.addEventListener("click", async () => {
    chrome.storage.sync.set({ verif: changeStyle.checked });
    isCheckedBold()
});

async function isCheckedBold() {
    if (changeStyle.checked == true) {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setPageTextBold,
        })
    } else {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setResetTextBold,
        })
    }
};

function setPageTextBold() {
    var boldText = document.getElementsByTagName('*');
    for (let i = 0; i < boldText.length; i++) {
        boldText[i].style.fontWeight = 'bold';
    };
};

function setResetTextBold() {
    let boldText = document.getElementsByTagName('*');
    for (let i = 0; i < boldText.length; i++) {
        boldText[i].style.fontWeight = null;
    };
};