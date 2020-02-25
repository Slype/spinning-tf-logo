let orgBoxSize = 90;
let orgSpacing = 45;
let boxSize, spacing;
let c = 0;
let pattern = [
  [0, 0, 2, 2],
  [1, 1, 1, 0],
  [0, 1, 2, 2],
  [0, 1, 2, 0]
];

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  windowResized();
}

function draw(){
  background(25);
  for(let i = 0;i < pattern.length;i++){
    let yOffset = (i - 2) * (boxSize + spacing);
    for(let j = 0;j < pattern[i].length;j++){
      let xOffset = (j - 2) * (boxSize + spacing);
      if(pattern[i][j]){
        push();
        translate(xOffset + (boxSize / 2 + spacing / 2), yOffset + (boxSize / 2 + spacing / 2), 0);
        rotateY(c);
        rotateX(c);
        pattern[i][j] == 2 ? fill("#d47611") : fill(255);
        box(boxSize, boxSize, boxSize);
        pop();
      }
    }
  }
  if(c > 360){
    if(frameCount % 60 == 0){
      c = 0;
    }
  }
  else {
    c++; 
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  let windowSize = width > height ? height - 100 : width - 100;
  let patternWidth = (pattern.length * orgBoxSize + (pattern.length - 1) * orgSpacing);
  let scalar = windowSize / patternWidth;
  if(windowSize < patternWidth){
    boxSize = orgBoxSize * scalar;
    spacing = orgSpacing * scalar;
  }
  else {
    boxSize = orgBoxSize;
    spacing = orgSpacing;
  }
}