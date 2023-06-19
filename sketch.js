let b;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  b = new Sphere(width/2, height/2, 0);
}

function draw() {
  background(51);
  b.pos.x = width/2;
  b.pos.y = height/2
  b.show();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
