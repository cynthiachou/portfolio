var srctxt;
var words;
var result;

function preload() {
  srctxt = loadStrings('text.txt');
}

function setup() {
  noCanvas();
  srctxt = join(srctxt, ' ');
  words = splitTokens(srctxt, ' ,!?.()');
  result=select("#result");

  var seed = select("#seed");
  var submit = select('#submit');
  submit.mousePressed(
    function() {
      result="";
      var phrase = diastic(seed.value(), words);
      result=createP(phrase);
    }
  );
}

function diastic(seed, words) {
  phrase = "";
  var currentWord = 0;

  for (var i = 0; i < seed.length; i++) {
    var c = seed.charAt(i);

    for (var j = currentWord; j < words.length; j++) {
      if (words[j].charAt(i) == c) {
        phrase += words[j];
        phrase += " ";
        currentWord = j + 1;
        break;
      }
    }
  }
  return phrase;
}
