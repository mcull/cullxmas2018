var strings, bulbs;
var stringX = 0;
var isAnimatingString = false;
var animationDirection = 1;
var animationSteps = 10;
var animationStepPixels;
var animationMask;
var colors = ["red",
              "blue",
              "green",
              "yellow",
              "orange",
              "purple"];
var imageLoading = false;
var imageIndex = 0;
var images = ["./images/Christmas_Template_462446_3840x2400.jpg",
        "./images/wood.jpeg"]

function setup() {
  createCanvas(windowWidth, windowHeight);
  strings = new Array();
  for (var i = 0; i < 5; i++) {
    strings.push(new stringOfLights(i,this.getAlternatingLights(random(9,11))));
  }
}

function getAlternatingLights(num) {
  var colorPair = new Array();
  var lights = new Array();
  while (colorPair.length < 2) {
    var c = colors[Math.floor(Math.random() * colors.length)];
    if (colorPair[0] == c) {
      continue;
    }
    colorPair.push(c);
  }
  for (var i = 0; i < num; i++) {
    lights.push(new lightbulb(color(colorPair[i%2])));
  }
  return lights;
}

function draw() {
  //background(204);
  if (!imageLoading) {
    imageLoading = true;
    loadImage(images[imageIndex++%2], function(img) {
      background(img);
      imageLoading = false;
    });
  }
  noFill();
  strings.forEach(function(s) {
    s.render();
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function stringOfLights(index, bulbs) {
  this.index = index;
  this.bulbs = bulbs;
  this.xoffset = random(30,60);

  this.colors = colors;
  this.hang = random(100,150);
  this.yoffset = random(-10,10);

  this.increment = function() {
    return  this.yoffset + windowHeight/(strings.length+1);
  }

  this.top = function() {
    return this.increment()*this.index;
  }

  this.startY = function() {
    return (this.index % 2 == 0) ? this.top() : this.top() + this.increment();
  }

  this.endY = function() {
    return (this.index % 2 > 0) ? this.top() : this.top() + this.increment();
  }

  this.render = function() {
    strokeWeight(2)
    stroke("black");
    noFill();

    var dangle = (this.startY() + this.endY())/2 + this.hang;
    bezier(-this.xoffset, this.startY(), windowWidth/3, dangle, (windowWidth/3)*2, dangle, windowWidth+this.xoffset, this.endY());
    for (var i = 0; i < bulbs.length; i++) {
      var t = i / bulbs.length;
      var x = bezierPoint(-this.xoffset, windowWidth/3, (windowWidth/3)*2, windowWidth+this.xoffset, t);
      var y = bezierPoint(this.startY(), dangle, dangle, this.endY(), t);
      bulbs[i].render(x,y);
    }
  }
}
