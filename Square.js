class Square{
    x;
    y;
    d;
    vx;
    vy;
    constructor(x,y,d){
      this.x = x;
      this.y = y;
      this.d = d;
      this.vx = random(-20, 20)
      this.vy = random(-20, 20)
      rectMode(CENTER);
      
    }
    update(){
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
    draw(){
        square(this.x, this.y, this.d)
    }
}