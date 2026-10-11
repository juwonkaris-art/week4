//size unit, used for scaling shapes
let unitW, unitH;

//global variable for rotation
let angle3;
let rotSpeed3;

//colorPalette
let colorPal = ['#D73220','#F9ECE5','#68150A','#0B78B3','#1F0062'];
let randCol1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  angle3 = 0;
  rotSpeed3 = random(-1,3);

  unitW = width/8;
  unitH = height/8;

  randCol1 = floor(random(0, colorPal.length));
}

function draw() {
  background(0);

  push();
  translate(width/2,height/2);

  let circSize = unitH*3;
  let r = circSize/2;

  //clock circle 
  stroke(colorPal[randCol1]);
  strokeWeight(3);
  noFill();
  circle(0,0,circSize);

  //clock numbers
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER,CENTER);
  
  for (let i = 1; i <= 12; i++) {
    let angle = i * 30 - 90;
    let x = cos(angle) * (r - 25);
    let y = sin(angle) * (r - 25);
    text(i, x, y);
  }

  //clock hand
  stroke(colorPal[randCol1]);
  strokeWeight(4);
  rotate(angle3);
  line(0,0,r,0);
  pop();

  angle3 += rotSpeed3;
}