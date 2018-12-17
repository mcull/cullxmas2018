var strings, bulbs;
var stringX = 0;
var isAnimatingString = false;
var animationDirection = 1;
var animationSteps = 10;
var animationStepPixels;
var animationMask;

function setup() {
  createCanvas(windowWidth, windowHeight);
  init();
}

function init() {
  animationStepPixels = windowWidth/animationSteps;
  string = new Array();
  bulbs = new Array();
}

function draw() {
  background(204);
  /*
  if (stringX < windowHeight) {
    if (isAnimating) {
      animationMask
    }
    addString();
  }*/
  noFill()

  bezier(0, 0, windowWidth/3, 150, (windowWidth/3)*2, 160, windowWidth, 100);
  fill("red");
  var steps = 10;
  for (var i = 0; i <= steps; i++) {
    var t = i / steps;
    var x = bezierPoint(0, windowWidth/3, (windowWidth/3)*2, windowWidth, t);
    var y = bezierPoint(0, 150, 160, 100, t);
    ellipse(x, y, 5, 5);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  init();
}

function addAString() {

}
