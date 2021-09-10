const hardWordsToSoftWordsFR = new Map()

hardWordsToSoftWordsFR.set('des', 'soleil')
hardWordsToSoftWordsFR.set("la", "danse")

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