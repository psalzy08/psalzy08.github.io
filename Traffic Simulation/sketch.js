// Traffic Simulation
// Peyton Salzsauler
// October 20th, 2025
//



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}
function drawRoad(){
  //creates the road
  fill(40);
  rectMode(CENTER);
  rect(width/2, height/2, width, height/2);

  // creates the yellow line on the road
  for(let i = 0; i < width; i+= 30){
    fill(255,255,0);
    rect(i, height/2, 20, 5);

  }
}
class Car{
  constructor(x,y){
    
  }
}
