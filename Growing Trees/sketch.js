// Growing Trees 
// Peyton Salzsauler
// November 26th, 2025
//

let angle = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  translate(width/2, height);
  branch(220);
}

function draw() {
  //background(220);
  angle = map(mouseX, 0, width,0,180)
  
  
}

function branch(len){

  let t = map(len, 2, 220, 1, 20);
  strokeWeight(t);
  line(0,0,0,-len);
  translate(0,-len);

  if(len > 2){// only recursive case
    push();
      rotate(angle);
      branch(len *random(0.4,0.9));
    pop();
    push();
      rotate(-angle);
      branch(len *random(0.4,0.9));
    pop();
  }
}