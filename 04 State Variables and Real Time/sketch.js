// State Variables and Real Time
// Peyton Salzsauler
// September 18th, 2025
//
// Global Variables
let shapeState = 0; //0 - Circle   1- Square  2- Triangle   3- Transistion
let startTime, elapsedTime;
function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}

function draw() {
  // targeting 60fps
  background(220);
  drawShape();
  //print("frame:" + frameCount);
  manangeTimer();
  if(shapeState === 3 && elapsedTime > 2000){
    shapeState = 0;
  }
}

function manageTimer(){
  // update eplapsed time and Display
  //print(millis());
  elapsedTime = millis() - startTime;
  text((elapsedTime/1000).toFixed(2), width*0.3, height*0.75)

}



function keyPressed(){
  //automatically called on any keyboard press
  //state var: 0 -> 1    1 -> 2
  //           2 -> 3     
  if(shapeState < 3){
    shapeState++;
    if(shapeState===3){
      startTime = millis();
    }
  }
}
function drawShape(){
  //inspect our state variable, and draw 1 of 4 possible 
  //options, depending on the current value
  switch(shapeState){
    case 0:
      circle(width/2, height/2, 150);
      break;
    case 1:
      circle(width/2, height/2, 150);
      break;
    case 2:
      let x = width/2;    let y = height/2
      triangle(x-50, y+50, x+50, y+50, x, y-25);
      break;
    case 3:
      for(let i = 0; i<20; i++){
        let x = random(width* 0.4, width*0.6);
        let y = random(height*0.4, height* 0.6);
        line(x, y, x+25, y);
      }
  }
}