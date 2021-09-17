
///

// attentat
// meurtre
// viol
// crise
// critique
// risque
// nucléaire
// attaque
// harcèlement
// gouvernement






const hardWordsToSoftWordsFR = new Map()

hardWordsToSoftWordsFR.set(' attentat ', ' twister ')
hardWordsToSoftWordsFR.set(" crime ", " infamie ")
hardWordsToSoftWordsFR.set(" gouvernement ", " soleil ")
hardWordsToSoftWordsFR.set(" risque ", " étreinte ")
hardWordsToSoftWordsFR.set(" attaque ", " tornade ")
hardWordsToSoftWordsFR.set(" critique ", " caresse ")
hardWordsToSoftWordsFR.set(" harcèlement ", " hullulement ")
hardWordsToSoftWordsFR.set(" président ", " lion ")
hardWordsToSoftWordsFR.set(" Macron ", " Sourire ")
hardWordsToSoftWordsFR.set(" crise ", " rave ")



function permuteElement() {

  for (var hardWord of hardWordsToSoftWordsFR.keys()) {
    var softWord = hardWordsToSoftWordsFR.get(hardWord)
    var elements = document.getElementsByTagName('*')
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i]
      for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j]
        if (node.nodeType === 3) {
          var text = node.nodeValue;
          var replacedText = text.replace(hardWord,softWord);
          if (replacedText !== text) {
            //element.innerHTML =  text.replace(hardWord, "<span style='color:${createColor()}'>" + softWord + "</span>");
            element.innerHTML =  text.replace(hardWord, "<span style='color:"+ createColor() + "'>" + softWord + "</span>");

          }
        }
      }
    }
  }
}
setInterval(permuteElement, 3000)

function createColor() {
  const colors = ["#D9A6FB", "#A6FBCA", "#FBB1A6", "#FCF36E", "#A0FCF1", "#FDC8F5"]
  let colorRandom = colors[Math.floor(Math.random() * colors.length)]
  return colorRandom  
}

// 
