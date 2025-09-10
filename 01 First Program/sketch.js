// Coordinate Systems and User Events
// Peyton Salzsauler
// September 10, 2025
// A first look at Interactive Programs with p5.js
//
function setup() { // runs once at the start
  createCanvas(400, 400);
  print(windowWidth, windowHeight, width, height);
}

function draw() { // runs over and over 
                  // targeting 60 fps
  // strive to keep draw() clean and tidy
  background(220);
  fill(0,255,0);
  //   R  G  B
  circle(mouseX,mouseY, 30);
  drawTwoCircles();
}
function drawTwoCircles(){ // [ALT][SHIFT][F]-> Autoformat
  // draws two circles one at a fixed location
  // and one at the mouse location


  fill(0,255,0);
  //   R  G   B
  circle(mouseX, mouseY, 30);

  circle(width/2, height/2, 100);
}
