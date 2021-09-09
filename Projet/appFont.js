var globalFont =  document.getElementsByTagName('*');
    function changeFont (){
        for (let i =0; i<globalFont.length;i++)
        {
            globalFont[i].style.fontFamily='Tahoma';
        }
    };
    changeFont();

var bold_text = document.getElementsByTagName('p');
//var to_uppercase = document.getElementsByTagName('p');//
var titre_H1 = document.getElementsByTagName('h1');

function changeColor(){
    for (let i=0; i < titre_H1.length; i++) {
    titre_H1[i].style.color = 'green';
    }
};

function changeWeight(){
    for (let i=0; i < bold_text.length; i++) {
    bold_text[i].style.fontWeight = '900';
    }
};

/*function change_uppercase(){
    for (let i=0; i < to_uppercase.length; i++) {
    to_uppercase[i].style.textTransform = 'uppercase';
    }
};*/
changeColor();
changeWeight();
//change_uppercase();//