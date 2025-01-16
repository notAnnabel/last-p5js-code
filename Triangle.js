class Triangle extends Shape{
 
    constructor(x,y,d){
        super(x,y,d);
        
      this.rotation = 10;
      rectMode(CENTER);
      angleMode(DEGREES);
      
    }
    update(){
          
        super.update()
        this.rotation+=5;
    }
    draw(){
        let r = this.d/2;

        //push()
        //translate(this.x, this.y)
        //rotate(this.rotation)
        //square(0, 0, this.d)
        //pop()
        push()
        translate(this.x+30, this.y+30)
        rotate(this.rotation)
        triangle(-r, r, r, r, 0, -r);
        pop()
        
    }
}