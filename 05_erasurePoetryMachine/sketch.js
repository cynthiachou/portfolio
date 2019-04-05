var srctext;
var word;

function preload() {
  srctext = loadStrings('test.txt');
}

function setup() {
  noCanvas();

  srctext = join(srctext, ' ');
  //change text from array to string
  words = splitTokens(srctext, ' ,.?!:""“-');
  //splits a String at the character delimiters or "tokens."

  for (var c = 0; c < words.length; c++) {
    createSpan(words[c] + ' ');
    var oneWord = document.getElementsByTagName("span");
    oneWord[c].setAttribute('id', c);
    oneWord[c].setAttribute('class', 'normalFont');
    document.getElementById(c).addEventListener("click", change);
  }
}

function change() {
  this.setAttribute('class', 'clickedFont');
}

//noprotect