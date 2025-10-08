// Loops Prep
// Peyton Salzsauler
// October 6th, 2025


let gridSize = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function grid(){
  // draw a grid or something
  strokeWeight(10);
  let x = 0; let y = 0;
  while(x < width){ //x:   0   40  80 120
    let y = 0;
    while (y < height){ //y:0 40 80 120 .....900
      if(abs(width/2 - x) > 100){
        point(x, y);
      }
      point(x, y);
      y += gridSize;
    }
    x += gridSize;
  }
}
function draw() {
  background(220);
  grid();
}
