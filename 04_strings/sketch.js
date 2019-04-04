var textfield;
var button;
var s;
var keyword = "rainbow";

function setup() {
  noCanvas();

  button = select('#submit');
  button.mousePressed(loadtext);
}

function loadtext() {
  textfield = select('#txt');
  s = textfield.value();
  var length = s.length;
  var a = 0;

  var index = 0;
  index = s.indexOf(keyword);

  while (a != -1 && a < length - keyword.length) {
    index = s.indexOf(keyword, a);
    createP("Found " + keyword + " at " + index);
    a = index + 1;
  }

}
