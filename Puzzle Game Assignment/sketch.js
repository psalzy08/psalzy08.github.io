// Puzzle Game Assignment
// Peyton Salzsauler
// November 4th, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [
  [0 ,255, 255, 0, 0],
  [0 , 255 , 0, 255, 0],
  [255, 0, 0, 255, 255],
  [0, 255, 255, 0, 255],
]

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
  print(getCurrentX(),getCurrentY());
  
}

function mousePressed(){
  //flip current tile
  //upgrade: only do this if the mouse is on Canvas
  
  let x = getCurrentX();
  let y = getCurrentY();

  //ALWAYS: flip the "focused" tile
  

  //IF THEY EXIST:
  //flip our NSEW neighbours (cross pattern)
  if(keyIsDown(SHIFT)){
    flip(x,y);
  }
  else{
    if(x+1 < cols) flip(x+1,y);
    if(y-1 >= 0) flip(x, y-1);
    if(y+1 < rows) flip(x, y+1);
    if(x-1 >= 0) flip(x-1, y);
    flip(x,y);
  }
  
}

function getCurrentX(){
  //determine current col of mouse position
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / squareSize);
}

function getCurrentY(){
  //determine current row of mouse position
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / squareSize);
}
function flip(x,y){
  //takes a tile @ x,y and inverts its value
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function renderGrid(){
  // interpret the information in the 2D array, and draw
  // a grid of square on the screen to reflect it.
  for (let y = 0; y < rows; y++){
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
  countB = 0;
  //check the grid to see if you won
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      if(grid[y][x] = 0){
        countB += 1;
        if(countB = rows*cols){
          textAlign(CENTER);
          text("You Win!",rows/2, cols /2,);
        }
      }
      if(grid[y][x] = 255){
        countW += 1;
      }
    }
  }
}