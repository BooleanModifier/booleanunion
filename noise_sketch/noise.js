class Particle {
  constructor() {
    let t = random(PI * 2);
    this.x = random(width);
    this.y = random(height);
    this.size = 3;
    this.speed = 2;
    this.col = color(186, 194, 174, 20);
  }

  move() {
    let n = noise(this.x * 0.003, this.y * 0.003);
    this.x += sin(n * 4 * PI) * this.speed;
    this.y += cos(n * 4 * PI) * this.speed;
  }

  display() {
    stroke(this.col);
    strokeWeight(2);
    point(this.x, this.y);
  }
}
let canvas;
let particles = [];
let amount = 5000;
let radius;

function windowResized() {
resizeCanvas(windowWidth, windowHeight)


}

function setup() {
  frameRate(20);
  canvas = createCanvas( windowWidth, windowHeight);
  canvas.position(0,0);
  background(256, 0);

  if (width < height) {
    radius = width / 5;
  } else {
    radius = height / 5;
  }
  for (let i = 0; i < amount; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  
  for (let i = 0; i < amount; i++) {
    if (particles[i] != null) {
      if (
        particles[i].x >= 0 &&
        particles[i].x <= width &&
        particles[i].y >= 0 &&
        particles[i].y <= height
      ) {
        particles[i].move();
        particles[i].display();
      } else {
        particles.splice(i, 1);
      }
    }
  }

  
}
