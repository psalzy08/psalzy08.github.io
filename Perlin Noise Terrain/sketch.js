// Perlin Noise project
// Peyton Salzsauler
// October 1st, 2025
//





let rectWidth = 1; // determines width of rectangles (changes smoothness of terrain)
let timeX = 0;
let speed = 0.005; // sets speed of scrolling

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0); 
}


function generateTerrain(){ // creates terrain using perlin noise

  rectMode(CORNERS);

  let timeY = timeX;
  let highestY = height;
  let highestX = 0;

  for(let x = 0; x < width;  x += rectWidth) {
    
    let rectHeight = noise(timeY);
    rectHeight = map(rectHeight, 0, 1 , 50, height * 0.7);
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);



    if (y2 < highestY){ //finds the new highest point
      highestY = y2;
      highestX = x;
    }


    timeY += 0.007;
  }
  

  rectMode(CORNER);
  
  return {highestX, highestY};
}

function draw() {
  background(255);


  let highestPoint = generateTerrain();

  drawFlag(highestPoint.highestX, highestPoint.highestY);

  timeX += speed;
}


function drawFlag(x,y){ // draws a simple red flag

  stroke(0);
  strokeWeight(3);
  line(x, y, x , y - 40);




  noStroke();
  fill(255,0,0);
  triangle(x,y - 40, x + 25, y - 30, x, y - 20);
  fill(0);
}
