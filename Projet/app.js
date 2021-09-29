const hardWordsToSoftWordsFR = new Map();

hardWordsToSoftWordsFR.set("attaque", "tornade");
hardWordsToSoftWordsFR.set("harcèlement", "hullulement");
hardWordsToSoftWordsFR.set("critique", "caresse");


function permuteElement() {

  for (var hardWord of hardWordsToSoftWordsFR.keys()) {
    var softWord = hardWordsToSoftWordsFR.get(hardWord)
    var elements = document.getElementsByTagName('*')

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i]

      for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j]

        if (node.nodeType === 3) {
          var text = node.nodeValue
          var replacedText = text.replace(hardWord, softWord)

          if (replacedText !== text) {
            element.innerHTML = text.replace(hardword, "<span style='color:red'>" + softWord + "</span>")
          };
        };
      };
    };
  };
};

setInterval(permuteElement, 3000)