function setup() {
  var input = select('#input');
  var submit = select('#submit');
  var result = select('#result')
  submit.mousePressed(getInput);
}

function getInput() {
  var inputContent = input.value;
  var words = inputContent.split(/(\W+)/);

  for (var i = 0; i < words.length; i++) {
    var span = createSpan(words[i]);
    span.parent(result);

    if (!/(\W+)/.test(words[i])) {
      span.mouseOver(hightlight);
    }
  }
}

function hightlight() {
  this.style('background-color', color(random(255), random(255), random(255)));
}
