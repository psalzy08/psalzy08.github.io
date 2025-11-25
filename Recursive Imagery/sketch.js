// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function centerCircle(x, y, d){
  // recursively draw concentric circles
  // base case... implicit
  if(d > 10){
    //recursive case
    circle(x,y,d);
    centerCircle(x,y,d * 0.9);
  }

  //if we skip the recursive case, we
  // unravel one level....base case
  
}

function circleFractal(x,y,d){
  //this better be good
  if(d > 2){
    circle(x,y,d);
    circleFractal(x - d/2, y, d/2)
    circleFractal(x + d/2,y, d/2);
    circleFractal(x,y + d/2, d/2);
    circleFractal(x,y - d/2, d/2);

   
  }
  //base case is implicit
}


function setFill(x,y,s){
  if(dist(mouseX, mouseY, x,y)< s/2){
    strokeWeight(5);
  }
  else{
    strokeWeight(1);
  }
}

function luckySquares(x,y,s){
  if(s>10){
    push();
    translate(x,y);
    rotate(radians(frameCount));
    fill(255,0,0,60);
    square(0,0,s);
    pop();
    
    
    luckySquares(x-s/2,y-s/2, s*0.4);
    luckySquares(x-s/2,y+s/2, s*0.4);
    luckySquares(x+s/2,y-s/2, s*0.4);
    luckySquares(x+s/2,y+s/2, s*0.4);
  }
}

function draw() {
  rectMode(CENTER);
  noFill();
  background(0);
  stroke(0);
  //circleFractal(width/2, height/2, width/2);
  luckySquares(width/2, height/2, width/2)
  //centerCircle(width/2, height/2, width);
  //setFill(width/2,height/2,width/2)
}
