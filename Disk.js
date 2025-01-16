class Disk extends Shape{
    constructor(x,y,d){
        super(x,y,d)
    }
    
    draw(){
        circle(this.x, this.y, this.d)  
    }
}