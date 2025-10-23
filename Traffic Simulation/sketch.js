// Traffic Simulation
// Peyton Salzsauler
// October 20th, 2025
//

let myVehicle;
let direction;
let eastbound = [];
let westbound = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(2, round(random(0,1))));
  }
  for(let i = 0; i< 20; i++){
    westbound.push(new Vehicle(1, round(random(0,1))));
  }
  
}

function draw() {
  background(220);
  drawRoad();


  for(let e of eastbound){
    e.action();
  }
  for(let w of westbound){
    w.action();
  }
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

function mousePressed(){
  if (mouseButton === LEFT){
    if (keyIsDown(SHIFT)){
      westbound.push(new Vehicle(1, round(random(0, 1))));
    }
    else{
      eastbound.push(new Vehicle(2, round(random(0, 1))));
    }
  }
}

class Vehicle{
  constructor(direction, type){
    this.c = color(random(255), random(255), random(255));
    this.xSpeed = random(2,10);
    this.direction = direction;
    this.type = type;
    if(this.direction === 1){
      this.y = random(250, 420);
      this.x = random(width);
    }
    else{
      this.y = random(455, 640);
      this.x = random(width);
    }
  }
  action(){
    this.move();

    if (random(100) < 1) this.speedUp();
    if (random(100) < 1) this.speedDown();
    if (random(100) < 1) this.changeColor();


    this.display();
  }
  display(){
    if(this.type === 0){
      rectMode(CORNER);
      fill(this.c);
      noStroke();
      rect(this.x, this.y, 50, 30);
      stroke(2);
      fill(255);
      rect(this.x + 5, this.y, 10, -5 );
      rect(this.x + 35, this.y, 10, -5 );
      rect(this.x + 35, this.y + 35, 10, -5 );
      rect(this.x + 5, this.y + 35, 10, -5 );
    }
    if(this.type === 1){
      rectMode(CORNER);
      fill(this.c);
      if(this.direction === 1){
        rect(this.x, this.y, 20, 40);
        rect(this.x + 25, this.y, 40, 40);
      }
      else{
        rect(this.x, this.y, 40, 40);
        rect(this.x + 45, this.y, 20, 40);
      }
    }
  }
  move(){
    if (this.direction === 1){
      this.x -= this.xSpeed;
      if(this.x < -100){
        this.x = width + 400;
        
      }
    }
    if (this.direction === 2){
      
      this.x += this.xSpeed;
      if(this.x > width){
        this.x = -400;
      }
    }  
  }

  speedUp(){
    this.xSpeed = min(this.xSpeed + 1, 15)
  }

  speedDown(){
    this.xSpeed = max(this.xSpeed - 1, 1);
  }

  changeColor(){
    this.c = color(random(255), random(255), random(255));
  }
}
