// Perlin Noise project
// Peyton Salzsauler
// October 1st, 2025
//





let rectWidth = 1;
let timeY;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
  timeY = random(0,100);
}


function generateTerrain(){
  rectMode(CORNERS);
  
  for(let x = 0; x < width;  x += rectWidth) {
    
    let rectHeight = noise(timeY);
    rectHeight = map(rectHeight, 0, 1 , 50, height * 0.7);
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);
    timeY += 0.007;
  }
  

  rectMode(CORNER);
 
}

function draw() {
  //background(220);
}
