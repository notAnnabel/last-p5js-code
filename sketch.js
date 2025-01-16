let disk;
let mySquare;
function setup() {
  createCanvas(innerWidth, innerHeight);
  disk = new Disk(width/2, height/2, 50)
  mySquare = new Square(width/2, height/2, 50)
}

function draw() {
  background(220, 30);
  stroke(random(100,255), random(0,100), random(100,255));
  strokeWeight(5)
  disk.update()
  disk.draw()
  mySquare.update()
  mySquare.draw()
}
