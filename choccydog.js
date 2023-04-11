let circlex = 50;
let eyeout = 935;
let eyein = 930;
let crossx1 = 2000;
let crossx2 = 2000;

function setup() {
  createCanvas(1200, 600);
}

function mousePressed() {
  circlex = circlex - 50;
}

function draw() {
  background(220);

  fill(255, 255);
  //   strokeWeight(10)
  //   // big rectangle
  //  rect(750,0,500,400)
  //   // ears
  //   rect(1000,0,100,200)

  fill(220);
  //   strokeWeight(0)
  //   triangle(70,0,850,0,700,260)

  line(1180, 100, 1180, 500); //vertical line
  stroke(0);
  strokeWeight(10);

  line(1180, 500, 875, 500); //bottom line
  stroke(0);
  strokeWeight(10);

  line(1180, 100, 900, 100); //top line
  stroke(0);
  strokeWeight(10);

  circle(circlex, 380, 50);

  noStroke();
  fill(220);

  quad(700, 450, 725, 500, 875, 400, 900, 320);

  stroke(10);

  line(1180, 100, 1180, 500);

  line(900, 100, 850, 225);

  line(850, 225, 650, 225);

  line(650, 225, 650, 350);
  line(650, 350, 850, 350);

  line(850, 350, 700, 450); //mouth top

  line(700, 450, 725, 500); //mouth front

  line(725, 500, 875, 400); //mouth bottom

  line(875, 400, 875, 500); //chin

  rect(1000, 100, 150, 300);

  circle(eyeout, 175, 70); // eye outside

  circle(eyein, 175, 20); // eye inside

  line(crossx1, 140, crossx2, 205);
  line(crossx2, 140, crossx1, 205);

  noStroke();

  let t = "Press any key to restart.";
  textSize(30);
  fill(0);
  text(t, 500, 560, 1200, 100);

  let s = "YOUR DOG IS DEAD.";
  fill(50);
  text(s, 3000, 10, 20, 700); //original text has to be off screen

  circlex = circlex + 4;

  if (circlex > 850) {
    textSize(107);
    fill(0);
    text(s, 100, 10, 60, 500); //TEXT COMES ON SCREEN IF VALUE IS ABOVE 850
    eyeout = 2000;
    eyein = 2000;
    crossx1 = 910;
    crossx2 = 965;
  } else {
    textSize(107);
    fill(0);
    text(s, 5000, 10, 60, 500);
  } //TEXT STAYS OFF SCREEN IF CIRCLEX IS UNDER 850

  if (keyIsPressed === true) {
    circlex = 50;
    circlex = circlex + 4;
  }

  if (circlex > 850) circlex = 10000;

  if (circlex < 850) {
    crossx1 = 2000;
    crossx2 = 2000;
    eyein = 930;
    eyeout = 935;
  }

  if (circlex < 1) {
    circlex = 1;
  }
}
