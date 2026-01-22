// Image Manipulation Exercises
// Peyton Salzsauler
// November 17th 2025
//

let chip;
let butterly;
let hand;
let nuit;
let race;

function setup() {
  createCanvas(windowWidth, windowHeight*4);
  majorityColor(chip);
  noGreenRightSide(race);
  fiveColorPosterize(nuit);
  horizontalMirror(hand);
}

function draw() {
  background(220);
  image(chip, 0, 0);
  image(race, 0, windowHeight);
  image(nuit, 0, windowHeight*2);
  image(hand, 0, windowHeight*3);
}

function preload(){
  chip = loadImage("assets/chip.jpg");
  butterly = loadImage("assets/butterfly.jpg");
  hand = loadImage("assets/hand.jpg");
  nuit = loadImage("assets/nuit.jpg");
  race = loadImage("assets/race.jpg");

  
}
function majorityColor(img){
  img.loadPixels();

  for(let y = 0; y < img.height; y++){
    for(let x = 0; x < img.width; x++){
      let index = 4 * (y * img.width+x)

      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      //tiebreaker
      if(r >= g && r >= b){
        //red
        img.pixels[index + 0] = 255;
        img.pixels[index + 1] = 0;
        img.pixels[index + 2] = 0;
      }
      else if(g >= r && g >= b){
        //green
        img.pixels[index + 0] = 0;
        img.pixels[index + 1] = 255;
        img.pixels[index + 2] = 0;
      }
      else{
        //blue
        img.pixels[index + 0] = 0;
        img.pixels[index + 1] = 0;
        img.pixels[index + 2] = 255;
      }

    }

  }
  img.updatePixels();
}
function noGreenRightSide(img){
  img.loadPixels();
  
  for(let y = 0; y < img.height; y++){
    for(let x = 0; x < img.width; x++){
      //only change the left half
      if(x >= img.width/2){
        let index = 4 * (y * img.width + x);

        //set green to 0
        img.pixels[index + 1] = 0;
      }
    }
  }
  img.updatePixels();
}
function fiveColorPosterize(img){
  img.loadPixels();
  for(let y = 0; y < img.height; y++){
    for(let x = 0; x < img.width; x++){
      let index = 4 * (y * img.width + x);

      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      //avergage intensity
      let avg = (r+b+g)/3;

      //choose color based on avg
      if(avg>=205){
        img.pixels[index + 0] = 170;
        img.pixels[index + 1] = 230;
        img.pixels[index + 2] = 220;
      }
      else if(avg >= 155){
        img.pixels[index + 0] = 105;
        img.pixels[index + 1] = 150;
        img.pixels[index + 2] = 210;
      }
      else if (avg >= 105) {
        img.pixels[index + 0] = 120;
        img.pixels[index + 1] = 180;
        img.pixels[index + 2] = 60;
      }
      else if (avg >= 55) {
        img.pixels[index + 0] = 130;
        img.pixels[index + 1] = 30;
        img.pixels[index + 2] = 130;
      }
      else {
        img.pixels[index + 0] = 90;
        img.pixels[index + 1] = 10;
        img.pixels[index + 2] = 50;
      }
    }

    
  }
  img.updatePixels();
}
function horizontalMirror(img){
  img.loadPixels();

  let w = img.width;
  let h = img.height;

  for(let y = 0; y < h; y++){
    for(let x = Math.floor(w/2); x<w; x++){
      let indexRight = 4 * (y*w+x);
      let mirrorX = w - x -1;
      let indexLeft = 4*(y*w + mirrorX);

      img.pixels[indexLeft + 0] = img.pixels[indexRight + 0];
      img.pixels[indexLeft + 1] = img.pixels[indexRight + 1];
      img.pixels[indexLeft + 2] = img.pixels[indexRight + 2];
      img.pixels[indexLeft + 3] = img.pixels[indexRight + 3];
    }
  }
  img.updatePixels();
}