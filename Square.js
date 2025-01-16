class Square extends Shape{
 
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
        push()
        translate(this.x, this.y)
        rotate(this.rotation)
        square(0, 0, this.d)
        pop()
    }
}