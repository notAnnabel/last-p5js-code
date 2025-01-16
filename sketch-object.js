let disk;

function setup() {
  createCanvas(innerWidth, innerHeight);
  disk = {x:width/2, y:height/2 , d:50, vx:50, vy:50}
  disk.update = function(){
    this.x += this.vx;
    this.y += this.vy;
    let r = this.d/2;
    if(this.x < 0 + r || this.x > width - r){
      this.vx = -this.vx; 
    }
    if(this.y < 0 + r || this.y > height - r){
      this.vy = -this.vy; 
    }
  }
  disk.draw = function(){
    circle(this.x, this.y, this.d);
  }
}

function draw() {
  background(220);
  // logic
  disk.update()
  // draw
  disk.draw()
  

}
