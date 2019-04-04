var dropzone;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);
}

function highlight() {
  dropzone.style('background-color', '#ccc');
}

function unhighlight() {
  dropzone.style('background-color', '#fff');
}

function gotFile(file) {
  var img;
  img = createImg(file.data);
  img.size(100, 100);
  image(img, 0, 0, 200, 200)
}
