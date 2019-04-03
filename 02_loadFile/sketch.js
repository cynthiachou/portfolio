function loadfile() {
  loadStrings('phase.txt'.fileLoader);
}

function fileLoader(data) {
  //changing array to a string
  createP(data);
}

function setup() {
  noCanvas();

  createFileInput(fileSelected);

  var button = select('#loadfile');
  button.mousePressed(loadfile);
}

function fileSelected(file) {

  if (file.type == "text") {
    createP(file.name + " " + file.size + " " + file.type);
    createP(file.data);
  } else {
    createP("I need a text file.");
  }
}
