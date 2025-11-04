// Local Storage Demo
// Peyton Salzsauler
// October 24th, 2025

let mySquare;
totalBounces = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  mySquare = new Bouncer(width/2, height/2);
  
  textAlign(CENTER, CENTER);
  if(localStorage.getItem("numBounces") === null){
    localStorage.setItem("numBounces", 0);
  }
  else{
    totalBounces = int(localStorage.getItem("numBounces"));
    
  }
}

function draw() {
  background(220);
  mySquare.move();
  mySquare.display();
  if(totalBounces === 67){
    textSize(670);
    text(totalBounces, width/2, height/2);
  }
  if(totalBounces === 167){
    textSize(670);
    text(totalBounces, width/2, height/2);
  }
  if(totalBounces === 267){
    textSize(670);
    text(totalBounces, width/2, height/2);
  }
  if(totalBounces === 367){
    textSize(670);
    text(totalBounces, width/2, height/2);
  }
  if(totalBounces === 467){
    textSize(670);
    text(totalBounces, width/2, height/2);
  }
  if(totalBounces === 567){
    textSize(670);
    text(totalBounces, width/2, height/2);
  }
  else{
    textSize(30);
    text(totalBounces, width/2, height/2);
  }
  
  
}

function keyPressed(){
  print("delete");
  localStorage.setItem("numBounces", 0);
  totalBounces = 0;
}
class Bouncer{
  constructor(x,y){
    this.x = x; this.y = y;
    this.xSpeed = 40;
    this.ySpeed = 40;

  }
  // class methods
  display(){
    square(this.x, this.y, 30);
    if (totalBounces === 67){
      background(255, 0, 0);
    }
    
    if (totalBounces === 167){
      background(255, 0, 0);
    }
    
    if (totalBounces === 267){
      background(255, 0, 0);
    }
    
    if (totalBounces === 367){
      background(255, 0, 0);
    }
    
    if (totalBounces === 467){
      background(255, 0, 0);
    }
    
    if (totalBounces === 567){
      background(255, 0, 0);
    }


  }
  move(){
    this.x += this.xSpeed; this.y += this.ySpeed;

    //should we bounce?
    if(this.x < 0 || this.x > width){
      this.xSpeed *= -1;
      totalBounces ++;
      localStorage.setItem("numBounces", totalBounces);
    }

    if (this.y < 0 || this.y > height){
      this.ySpeed *= -1;
      totalBounces++;
      localStorage.setItem("numBounces", totalBounces);
    }
  }
}