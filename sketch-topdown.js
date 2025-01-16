let x;
let y;
let vx = 50; 
let vy = 50;
let d = 50; 
function setup() {
  createCanvas(innerWidth, innerHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  // logic
  x += vx;
  y += vy;
  let r = d/2;
  if(x < 0 + r || x > width - r){
    vx = -vx; 
  }
  if(y < 0 + r || y > height - r){
    vy = -vy; 
  }
  // draw
  circle(x, y, d);

}
