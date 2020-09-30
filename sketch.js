const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, myworld;
var box1,box2;
var ground1;

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    myworld = engine.world;

    ground = new ground(600,height,1200,20)
     box1 = new box(700,320,70,70); 
     box2 = new box(920,320,70,70); 
     pig1 = new pig(810, 350); 
     log1 = new log(810,260,300, PI/2);
      box3 = new box(700,240,70,70); 
    box4 = new box(920,240,70,70);
     pig3 = new pig(810, 220); 
     log3 = new log(810,180,300, PI/2);
      box5 = new box(810,160,70,70);
       log4 = new log(760,120,150, PI/8);
        log5 = new log(870,120,150, -PI/8); 
        bird = new bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log3.display();
    log4.display();
    log5.display();
    pig1.display();
    pig3.display();
    bird.display();
    ground.display();

}