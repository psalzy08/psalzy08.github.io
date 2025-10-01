// Objects and noise
// Peyton Salzsauler
// September 26th, 2025

let ball, ball2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = {
    x: 300, y: 400, size: 6,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  }
  ball2 = {
    x : 300, y : 400, size: 6, 
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  }
  ball3 = {
    x: 300, y: 400, size: 6,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball4 = {
    x: 300, y: 400, size: 6,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
  ball5 = {
    x: 300, y: 400, size: 6,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  }
  ball6 = {
    x: 300, y: 400, size: 6,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  }
  ball7 = {
    x: 300, y: 400, size: 6,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  }
  ball8 = {
    x: 300, y: 400, size: 6,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  }
  ball9 = {
    x: 300, y: 400, size: 6,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  };
}

function draw() {
  //background(220);
  moveBall(ball);
  moveBall(ball2);
  moveBall(ball3);
  moveBall(ball4);
  moveBall(ball5);
  moveBall(ball6);
  moveBall(ball7);
  moveBall(ball8);
  moveBall(ball9);
}
function moveBall(b){
  //b -> Ball type object 
  // update position and draw provided ball

  //generate random position change (x, and y)
  let dx = noise(b.timeX); // 0-1
  dx = map(dx, 0, 1, -5, 5);
  let dy = noise(b.timeY); 
  dy = map(dy, 0, 1, -5, 5);

  // advance our noise graph "cursors"
  b.timeX += b.timeOff;  b.timeY += b.timeOff;

  b.x += dx; 
  b.y += dy;

  if(b.x < 0){
     b.x += width;
    }
  if(b.x > width){ 
    b.x -+ width;
  }

  if(b.y < 0) {
    b.y += height; 
  }
  else if (b.y > height) {
    b.y -+ height;
  }

  //render the circle
  fill(b.c);
  circle(b.x, b.y, b.size);

}