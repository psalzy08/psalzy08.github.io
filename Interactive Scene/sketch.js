
// Interactive Scene 
// Peyton Salzsauler
// September 16, 2025

// variables that change background and landscape
let currentBack = 0;
let currentScape = 0;

function setup() {// creates canvas for the drawing
  createCanvas(500, 500);
  rectMode(CORNER);
  noStroke();
}

function draw() {
  // changes sky color values based on mouse y position
  let r = map(mouseY, 0, height, 0, 24);
  let g = map(mouseY, 0, height, 0, 133);
  let b = map(mouseY, 0, height, 0, 90);

  // Choose background color based on currentBack value
  if (currentBack === 0) {
    background(135 - r, 206 - g, 235 - b); // Light blue
    if (mouseY > 475) {
      background(111, 73, 145);
     } // Purple when near bottom
  } 
  else if (currentBack === 1) {
    background(219 - r, 147 - g, 22 - b); // Sunset orange
  } 
  else if (currentBack === 2) {
    background(255 - r, 100 - g, 100 - b); // Pink/red
  } 
  else if (currentBack === 3) {
    background(70 - r, 50 - g, 110 - b); // dark purple
  }

  // Draws sun character following the mouse
  fill(234, 255, 0);
  circle(mouseX, mouseY, 60);

  //draws mountains and the landscape
  mountains();
  landscape();
  noStroke();

  // Signed name
  fill(0);
  textSize(20);
  text("Peyton", 420, 480);
}

function mousePressed() {
  // Cycles sunset when middle mouse button is pressed
  if (mouseButton === CENTER) {
    currentBack = currentBack + 1;
    if (currentBack > 3) {
      currentBack = 0;
    }
  }
}
function keyPressed(){
  // determines which key is pressed
  // changes landscape based on key pressed
  if(key === 'b'){
    currentScape = 1;
    }
  else if(key === 'n'){
    currentScape = 0;
  }
}

function landscape(){// controls the bottom half of the horizon
  if(currentScape === 0){
    fill(167, 214, 120);
    rect(0, 250, 500, 250);
    cabin();
  }
  if (currentScape === 1){
    fill(78, 139, 199);
    rect(0, 250, 500, 250);
    dock();
  }
}

function mountains() {// creates mountains in distance
  fill(115, 108, 103);
  triangle(-100, 250, 250, 120, 600, 200);

  fill(158, 150, 145);
  triangle(-250, 250, 135, 130, 355, 250);
  triangle(800, 250, 400, 105, 0, 250);
}

function cabin() { // makes a cabin for default landscape
  // Cabin base
  fill(128, 105, 97);
  rect(350, 275, 100, 100);

  // Roof 
  fill(212, 139, 114);
  triangle(343, 275, 400, 230, 458, 275);

  // Roof outline
  fill(128, 105, 97);
  triangle(350, 275, 400, 235, 450, 275);

  // Door
  fill(212, 139, 114);
  rect(388, 330, 25, 45);

  // Doorknob
  fill(0);
  circle(407, 355, 3);
}
function dock() {// makes a dock for second landscape
  
  // makes dock
  fill(173, 136, 101); 
  rect(0, 300, 220, 50);
  
  // makes dock posts
  fill(140, 109, 79); 
  rect(0, 350, 10, 50);
  rect(50, 350, 10, 50);
  rect(100, 350, 10, 50);
  rect(150, 350, 10, 50);
  rect(200, 350, 10, 50);
  rect(0, 350, 220, 10);

  // fish body
  fill(217, 165, 11);
  circle(400, 370, 25);
  triangle(400, 370, 425, 379, 425, 359 );

  // fish eye and mouth
  fill(0);
  circle(395, 365, 5);
  stroke(0);
  line(388, 375, 400, 375 );
}
