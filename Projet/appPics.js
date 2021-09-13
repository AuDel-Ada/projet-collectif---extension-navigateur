var pics = document.getElementsByTagName ("img");
function changePics (){
    for (let i=0;i<pics.length;i++){
        pics[i].src=chrome.runtime.getURL("degrade2.svg");
    };
};
setInterval(changePics, 5000);