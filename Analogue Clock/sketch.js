// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let d = 250
let r = d/2

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawClock();
}

function drawClock(){
  push();
  translate(300,300);
  stroke(0);
  circle(0,0,d);
  angleMode(DEGREES);
  for(let i = 0; i < 12; i++){
    strokeWeight(3);
    line(r* 0.82, 0, r*0.96, 0);
    rotate(30);
  }
  for(let i = 0; i < 60; i++){
    strokeWeight(1);
    line(r * 0.90, 0, r*0.96,0);
    rotate(6);
  }
  rotate(frameCount/8.5);
  stroke(255,0,0);
  line(0,0,0,-r);
  angleMode(RADIANS);
  
}