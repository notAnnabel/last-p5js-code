class Shape{
    constructor(x,y,d){
      this.x = x;
      this.y = y;
      this.d = d;
      this.vx = random(-10, 10)
      this.vy = random(-10, 10)
      
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
    
}