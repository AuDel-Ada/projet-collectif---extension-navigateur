const hardWordsToSoftWordsFR = new Map()

hardWordsToSoftWordsFR.set(' des ', ' soleil ')
hardWordsToSoftWordsFR.set(" la ", " danse ")
hardWordsToSoftWordsFR.set(" the ", " dance ")

function permuteElement() {

  for (var hardWord of hardWordsToSoftWordsFR.keys()) {
    console.log(hardWord)
    var softWord = hardWordsToSoftWordsFR.get(hardWord)
    console.log(softWord)
    var elements = document.getElementsByTagName('*')
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i]
      for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j]
        if (node.nodeType === 3) {
          var text = node.nodeValue
          var replacedText = text.replace(hardWord, softWord)
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node)
          }
        }
      }
    }
  }
}

permuteElement()

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