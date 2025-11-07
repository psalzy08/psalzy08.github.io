// Traffic Simulation(Cars Cars Cars!)
// Peyton Salzsauler
// October 20th, 2025
//
let myTrafficLight;
let stopCars = false;
let lightTimer = 0;
let lightDuration = 2000;
let myVehicle;
let direction;
let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //pushes 20 vehicles in each lane
  for(let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(2, round(random(0,1))));
  }
  for(let i = 0; i< 20; i++){
    westbound.push(new Vehicle(1, round(random(0,1))));
  }

  // creates traffic light starting at green
  myTrafficLight = new TrafficLight(0);
}

function draw() {
  background(220);
  drawRoad();//draws road for vehicles

  // draws traffic light 
  myTrafficLight.display();

  if(myTrafficLight.light === 1){ //check if light is red
    stopCars = true; //stops all cars
    if(millis() - lightTimer >= lightDuration){
      //if 2 secs/120frames passed turn light back to green

      myTrafficLight.light = 0; //turns light green
      stopCars = false; // allow cars to move
    }
  }

  //moves cars if light is green
  for(let e of eastbound){
    e.action(stopCars); 
  }
  for(let w of westbound){
    w.action(stopCars);
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
  if (mouseButton === LEFT){//adds new vehicle when mouse is pressed
    if (keyIsDown(SHIFT)){
      westbound.push(new Vehicle(1, round(random(0, 1))));
    }
    else{
      eastbound.push(new Vehicle(2, round(random(0, 1))));
    }
  }
}
function keyPressed(){
  if(key === ' '){ //when the spacebar is pressed
    if(myTrafficLight.light === 0){
      myTrafficLight.light = 1; // turn red
      lightTimer = millis(); // start timer
    }
  }
}

class Vehicle{
  constructor(direction, type){// calls for direction and vehicle type
    // randomizes color
    this.c = color(random(255), random(255), random(255));
    //randomizes speed
    this.xSpeed = random(2,10);
    this.direction = direction;
    this.type = type;
    if(this.direction === 1){
      //places vehicle in correct lane
      this.y = random(height/2 -40, height/4 +20);
      this.x = random(width);
    }
    else{
      //places vehicle in correct lane
      this.y = random(height/2 + 20, height*(3/4) - 40);
      this.x = random(width);
    }
  }
  action(stopCars){
    if(stopCars === false){ // if light is green move the vehicle
      this.move();
    }
    
    // 1% chance of changing speed or color
    if (random(100) < 1) this.speedUp();
    if (random(100) < 1) this.speedDown();
    if (random(100) < 1) this.changeColor();


    this.display(); //displays cars
   }
  display(){
    if(this.type === 0){ // draws cars body
      rectMode(CORNER);
      fill(this.c);
      noStroke();
      rect(this.x, this.y, 50, 30);
      stroke(2);
      fill(255);
      //draws wheels of cars
      rect(this.x + 5, this.y, 10, -5 );
      rect(this.x + 35, this.y, 10, -5 );
      rect(this.x + 35, this.y + 35, 10, -5 );
      rect(this.x + 5, this.y + 35, 10, -5 );
    }
    if(this.type === 1){ // draws the trucks
      rectMode(CORNER);
      fill(this.c);
      if(this.direction === 1){ // draws truck based on direction
        rect(this.x, this.y, 20, 40);
        rect(this.x + 25, this.y, 40, 40);
      }
      else{
        rect(this.x, this.y, 40, 40);
        rect(this.x + 45, this.y, 20, 40);
      }
    }
  }
  move(){ //moves the vehicles based on direction 
    if (this.direction === 1){
      this.x -= this.xSpeed;
      if(this.x < -100){ // sets vehicles back to start
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

  speedUp(){ // randomly speeds up vehicle
    if(this.xSpeed < 15){// speeds up with max of 15
      this.xSpeed += 1;
    }
    else{
      this.xSpeed = 15; // sets speed to 15 to avoid bugs
    }
  }

  speedDown(){// randomly slows down vehicle
    if(this.xSpeed >= 1){ // slows down with minimum of 0
      this.xSpeed -= 1;
    }
    else{
      this.xSpeed = 0; //prevents car from going backwards
    }
  }

  changeColor(){// randomizes vehicle color again
    this.c = color(random(255), random(255), random(255));
  }
}
class TrafficLight{
  // creates traffic light that can stop cars
  constructor(light){
    this.x = width*0.15; this.y = height*0.15;
    this.light = light; // 0 for green 1 for red
  }
  display(){
    if(this.light === 0){// green light
      fill(0,255,0);
      circle(this.x, this.y, 100);
    }
    if(this.light === 1){// red light
      fill(255,0,0);
      circle(this.x, this.y, 100);
    }
  }
}
