function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  translate(width/2, height/2);
  specularColor(255, 255, 255);
  sphere(40);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
