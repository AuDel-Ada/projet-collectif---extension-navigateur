const hardWordsToSoftWordsFR = new Map();

hardWordsToSoftWordsFR.set("capitalisme", "bon roupillon");
hardWordsToSoftWordsFR.set("Le Pen", "Polenta");
hardWordsToSoftWordsFR.set("Macron", "Petites-pelures-de-clémentines");
hardWordsToSoftWordsFR.set("Darmanin", "Bouquet-de-persil");
hardWordsToSoftWordsFR.set("Monsanto", "rien");
hardWordsToSoftWordsFR.set("Zemmour", "Soupe-d'orties");


function permuteElement() {

  for (let hardWord of hardWordsToSoftWordsFR.keys()) {
    let softWord = hardWordsToSoftWordsFR.get(hardWord);
    let elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];

      for (let j = 0; j < element.childNodes.length; j++) {
        let node = element.childNodes[j];

        if (node.nodeType === 3) {
          let text = node.nodeValue;
          let replacedText = text.replace(hardWord, softWord);

          if (replacedText !== text) {
            element.innerHTML = text.replace(hardWord, "<span style='color:tomato'>" + softWord + "</span>")
          };
        };
      };
    };
  };
};
permuteElement ();


function changeBackgroundColor() {
  document.body.style.backgroundColor = "#FAF0E6" ;
};
changeBackgroundColor ();
