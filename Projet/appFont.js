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

// const hardWordsToSoftWordsFR = new Map()

// hardWordsToSoftWordsFR.set(' des ', ' soleil ')
// hardWordsToSoftWordsFR.set(" la ", " danse ")
// hardWordsToSoftWordsFR.set(" the ", " dance ")

// function permuteElement() {

//   for (var hardWord of hardWordsToSoftWordsFR.keys()) {
//     console.log(hardWord)
//     var softWord = hardWordsToSoftWordsFR.get(hardWord)
//     console.log(softWord)
//     var elements = document.getElementsByTagName('*')
//     for (var i = 0; i < elements.length; i++) {
//       var element = elements[i]
//       for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j]
//         if (node.nodeType === 3) {
//           var text = node.nodeValue;
//           var replacedText = text.replace(hardWord,softWord);
//           if (replacedText !== text) {
//             var newSpan = document.createElement('span');
//             coloredTextNode = element.replaceChild(document.createTextNode(replacedText), node);
//             var parent = coloredTextNode.parentElement
//             parent.appendChild(newSpan);
       
//             newSpan.style.color = "red";

            
//           }
//         }
//       }
//     }
//   }
// }

// setInterval(permuteElement, 3000)

// // var text = result.replace(_word, "<span style='color:red'>" + _word "</span>");
// // var _test = document.createTextNode("text");

// function createColor() {
//   const colors = ["#1F85DE", "#DBDE1F"]
//   let colorRandom = colors[Math.floor(Math.random() * colors.length)]
//   return colorRandom  
// }