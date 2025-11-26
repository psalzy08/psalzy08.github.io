// Puzzle Game Assignment
// Peyton Salzsauler
// November 4th, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [ //creates grid
  [0 ,255, 255, 0, 0],
  [0 , 255 , 0, 255, 0],
  [255, 0, 0, 255, 255],
  [0, 255, 255, 0, 255],
]
let squarePattern = false;
let countB;
let countW;
let rows = grid.length;
let cols = grid[0].length;

let squareSize = 60;

function setup() {
  createCanvas(cols*squareSize, rows*squareSize);
  randomGrid();
}

function draw() {
  background(220);
  renderGrid();
  gridOverlay();
  checkGrid();
}

function mousePressed(){
 
  
  let x = getCurrentX();
  let y = getCurrentY();
   
  if(squarePattern === false){
     if(keyIsDown(SHIFT)){
      flip(x,y); //flips middle selected square
      // if shift is pressed
    }
    else{ 
      //flips cross pattern
      if(x+1 < cols) flip(x+1,y);
      if(y-1 >= 0) flip(x, y-1);
      if(y+1 < rows) flip(x, y+1);
      if(x-1 >= 0) flip(x-1, y);
      flip(x,y);
    }
  }
  else {
    // flips the square pattern
    if (keyIsDown(SHIFT)) {
      flip(x, y);
      return;
    }

    flip(x, y);  // always flips the center

    if (x + 1 < cols) flip(x + 1, y);
    if (y + 1 < rows) flip(x, y + 1);
    if (x + 1 < cols && y + 1 < rows) flip(x + 1, y + 1);
  }
  
}

function getCurrentX(){
  //determine current column of mouse position
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / squareSize);
}

function getCurrentY(){
  //determine current row of mouse position
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / squareSize);
}
function flip(x,y){
  //find xy of a grid and flips that tile
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function renderGrid(){
  stroke(0);// keeps gridlines turned on

  for (let y = 0; y < rows; y++){  //renders the grid
    for (let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize,y*squareSize,squareSize);
    }
  }
}
function randomGrid(){
  // create a grid that randomizes every reset
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      grid[y][x] = floor(random(0,2))*255;
    }
  }
}
function checkGrid(){
  countB = 0; // counts black tiles
  countW = 0; // counts white tiles
  //check the grid to see if you won
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      if(grid[y][x] === 0){//checks if all squares are black
        countB += 1;
        if(countB === rows*cols){
          textSize(75);//adds you win text
          fill(255);
          textAlign(CENTER);
          text("You Win!",width/2, height/2,);
        }
      }
      if(grid[y][x] === 255){//checks to see if all squares are white
        countW += 1;
        if(countW === rows*cols){
          textSize(75); //adds you win text
          fill(0);
          textAlign(CENTER);
          text("You Win!",width/2, height/2,);
        }
      }
    }
  }
}
function gridOverlay(){
  // creates green overlay to show selected squares
  let x = getCurrentX();
  let y = getCurrentY();


  fill(150, 255, 150, 150);
  noStroke();
  if(squarePattern === false){
    // creates cross pattern overlay
    square(x * squareSize, y * squareSize, squareSize);

    if(y-1 >= 0){
      square(x * squareSize, (y-1)* squareSize, squareSize);
    }
    if(y+1 < rows){
      square(x * squareSize, (y+1)* squareSize, squareSize);
    }
    if(x-1 >= 0){
      square((x-1) * squareSize, y * squareSize, squareSize);
    }
    if(x+1 < cols){
      square((x+1) * squareSize, y* squareSize, squareSize);
    }
    stroke(0);
  }
  else{
  // square pattern overlay
  noStroke();

  // center
  square(x * squareSize, y * squareSize, squareSize);

  // right
  if (x + 1 < cols) {
    square((x + 1) * squareSize, y * squareSize, squareSize);
  }

  // below
  if (y + 1 < rows) {
    square(x * squareSize, (y + 1) * squareSize, squareSize);
  }

  // bottom-right
  if (x + 1 < cols && y + 1 < rows) {
    square((x + 1) * squareSize, (y + 1) * squareSize, squareSize);
  }

  stroke(0);
}
}
function keyPressed(){
  if (key === ' '){ 
    //if the spacebar is pressed switch pattern type
    squarePattern = true;
  }
}