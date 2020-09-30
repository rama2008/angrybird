class log {
    constructor(x,y,height,angle ){
        var options = {
          restitution:0.8,
         friction:1.0,
        density:1.0
        }
        this.bodies = Bodies.rectangle(x,y,10,height,options);
        this.width = 10;
        this.height = height;
        Matter.Body.setAngle(this.bodies, angle);
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

