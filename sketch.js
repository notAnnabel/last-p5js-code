//let disk;
//let mySquare;
let shapes=[];
//let r = random(100,255);
//let g = random(0,100);
//let b = random(200,255);

function setup() {
  createCanvas(innerWidth, innerHeight);
  for(let i = 0; i < 10; i++){
  shapes.push(new Disk(width/2, height/2, 50))
  shapes.push(new Square(width/2, height/2, 50))
  shapes.push(new Triangle(width/2, height/2, 50))
  }
}

function draw() {
  background(220, 30);
  for(let i=0; i < shapes.length; i++){
    stroke(random(50,100), random(50,100), random(50,100))
    strokeWeight(3)
    shapes[i].update()
    shapes[i].draw()
    
  }
  
 
  //for(let i=0; i < 255; i++){
    //r = r + 5;
    //g = g + 5;
    //b = b + 5;
    //if (r == 254 || g == 254 || b == 254){
      //let r = random(100,255);
      //let g = random(0,100);
      //let b = random(200,255);
    //}
  //}
  stroke(random(100,255),random(0,100), random(200,255));
  strokeWeight(5)
  //mySquare.update()
  //mySquare.draw()



}
