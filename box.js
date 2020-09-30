class box {
    constructor(x,y, width,height){
        var options = {
          restitution:1,
          friction:1.0,
          density:1.0
        }
        this.bodies = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(myworld, this.bodies);
    }
   
    display(){
        var pos = this.bodies.position;
        var angle = this.bodies.angle;
        push();
        translate(pos.x, pos.y); 
        rotate(angle);
        rectMode(CENTER); 
        fill(255); 
        rect(0, 0, this.width, this.height); 
        pop();

        }
    
}

