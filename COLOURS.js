function setup() {
  createCanvas(400, 400);
  noStroke();

}

function draw() {
  background(255);
blendMode(MULTIPLY);
  fill(255, 0, 255);
  circle(125,150,200);
  fill(0,255,255);
  circle(275,150,200) ;
  fill(255,255,0)
  circle(width / 2, 275,200)
}