// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);

}

function draw() {
  background(70);
  myPlanet.display();
}
function mousePressed(){ 
  //regular click -> add a moon
  // shift click -> reposition the moon

  if(keyIsDown && keyCode === SHIFT){

  }
  else{
    myPlanet.createMoon();
  }
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
  }
}


class Planet{
  constructor(x,y){
    this.x = x; this.y = y; this.s = 100;
    this.moons = []; 
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  
  //class methods

  createMoon(){
    
    this.moons.push(new Moon(this.x,this.y));
  }
  display(){
    
    fill(this.c, this.c, this.c);
    circle(this.x, this.y, this.s = 100);

    for(let m of this.moons){
      m.update(this.x, this.y);
    }
    
  }
} 
class Moon{
  constructor(x,y){
    this.speed = random(1,5);
    this.angle = 0; this.orbitRadius = random (80,250);
    this.s = random(5,50);
    
  }
  display(x,y){
    fill(255);
    push();
    translate(x,y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }
  move(){
    this.angle += this.speed;
  }
  update(x,y){
    //helper function to handle calling the
    // class methods internally
    
    this.move();
    this.display(x,y);
  }
}