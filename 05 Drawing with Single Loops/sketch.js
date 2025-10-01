// Drawing with single loops
// Peyton Salzsauler
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  gradientBackground();

  circleLine(height * 0.35, 30);
  circleLine(height/2, 50);
  circleLine(height * 0.65, 80);
}

function gradientBackground(){
  let h = 3;
  let y = 0;
  while (y <= height){
    noStroke();
    let mappedY = map(y,0,height,0,255);
    let flippedY = 255 - mappedY;
    let mappedMouseX = map(mouseX, 0, h, 255);
    let mappedMouseY = map(mouseY, 0, h, 255);
    fill(mappedMouseY, flippedY , mappedMouseX);
    rect(0, y, width, h);
    y += h;
  }
}
function cDistance(x1, y1, x2, y2){
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(pow(a,2)) + pow(b,2);
  return c.toFixed(1);
}



function circleLine(y, size){
  let xStart = width * 0.1;
  let xEnd = width * 0.9;

  for(let x = xStart ; x <= xEnd ; x += size){
    let d = cDistance(x,y,mouseX, mouseY);
    if(d<= size/2){
      fill(200,200,0);
    }
    else fill(255);
    circle(x,y, size);
    textAlign(CENTER, CENTER);
    fill(0);
    text(d, x, y);
  }

}