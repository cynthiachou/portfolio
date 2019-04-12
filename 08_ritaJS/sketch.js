var input;
var button;

var lexicon;
var s = "hey";
var r = new RiString(s);


function setup() {
  noCanvas();

  input = createInput('This is a dark and stormy night.');
  input.size(400);

  button = createButton('Find');
  button.mousePressed(processRita);

  lexicon = new RiLexicon;
}

function processRita() {
  var s = input.value();
  var rs = new RiString(s);
  var words = rs.words();

  var output = "";
  for (var i = 0; i < words.length; i++) {
    words[i] = new RiString(words[i]);
    //going through all the words

    if (words[i].pos() == "nn") {
      var rhythmW = rhythmN(words[i]._text);
      output += rhythmW;
      output += " ";
      // do something with noun words.

    } else if (words[i].pos() == "jj") {
      output += rhythmAdj(words[i]._text);
      output += " ";
      // do something with adjective words.

    } else if (words[i].pos() == "vb") {
      output += rhythmV(words[i]._text);
      output += " ";
      // do something with verb words.

    } else {
      output += words[i]._text;
      output += " ";

    }

  }

  createP(output);
}

function rhythmAdj(word) {
  var similar = RiTa.similarBySound(word);

  for (var i = 0; i < similar.length; i++) {
    if (RiTa.isAdjective(similar[i])) {
      word = similar[i];
      return word;
      break;
    } else {
      return word;
    }
  }
}

function rhythmN(word) {
  var similar = RiTa.similarBySound(word);

  for (var i = 0; i < similar.length; i++) {
    if (RiTa.isNoun(similar[i])) {
      word = similar[i];
      return word;
      break;
    } else {
      return word;
    }
  }
}

function rhythmV(word) {
  var similar = RiTa.similarBySound(word);

  for (var i = 0; i < similar.length; i++) {
    if (RiTa.isVerb(similar[i])) {
      word = similar[i];
      return word;
      break;
    } else {
      return word;
    }
  }
}
