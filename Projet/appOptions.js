const boxChangePics = document.getElementById ("pics");

chrome.storage.sync.get(['verif'], function (checkTrueOrFalse) {
    boxChangePics.checked = checkTrueOrFalse.verif;
});

boxChangePics.addEventListener("click", async () => {
    chrome.storage.sync.set({ verif: boxChangePics.checked });
    isCheckedNewPics()
});

async function isCheckedNewPics() {
    if (boxChangePics.checked == true) {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setNewPics,
        })
    } else {
        chrome.tabs.reload();
    }
};

function setNewPics (){
    let pics = document.getElementsByTagName ("img");
    for (let i=0; i<pics.length; i++){
        pics[i].src=chrome.runtime.getURL("degrade1.svg");
    };
    setInterval
};

setInterval(setNewPics, 3000);


const boxChangeStyle = document.getElementById("bold");

chrome.storage.sync.get(['verif'], function (checkTrueOrFalse) {
    boxChangeStyle.checked = checkTrueOrFalse.verif;
});

boxChangeStyle.addEventListener("click", async () => {
    chrome.storage.sync.set({ verif: boxChangeStyle.checked });
    isCheckedBold()
});

async function isCheckedBold() {
    if (boxChangeStyle.checked == true) {
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
    let boldText = document.getElementsByTagName('*');
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

isCheckedBold ();