// Starter Code for our 
// Terrain Generator
// Peyton Salzsauler
// September 29th, 2025
//

let rectWidth = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}


function generateTerrain(){
  rectMode(CORNERS);

  for(let x = 0; x < width;  x += rectWidth) {
    let rectHeight = random(50, 500);

    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);
  }


  rectMode(CORNER);
}

function draw() {
  //background(220);
}
