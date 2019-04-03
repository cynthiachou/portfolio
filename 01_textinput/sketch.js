var textField;
var output;
var submit;

function setup() {
  noCanvas();
  textField = select('#textField');

  //  textField.changed(newText);
  //everytime when the input is changed by user and enter is hit, the new Text function will be executed.
  //textField.input(newTyping);

  submit = select('#submit');
  submit.mousePressed(newText);


  output = select('#output');
}

function newText() {
  createP(textField.value());
}

// function newTyping() {
//   output.html(textField.value());
// }
