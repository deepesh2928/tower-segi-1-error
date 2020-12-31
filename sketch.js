const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;
var g1,g2;
var mHex,sling;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    b1 = new Box(940,267);
    b2 = new Box(970,267);
    b3 = new Box(1000,267);
    b4 = new Box(1030,267);
    b5 = new Box(1060,267);
    b6 = new Box(970,217);
    b7 = new Box(1000,217);
    b8 = new Box(1030,217);
    b9 = new Box(1000,167);
    // 
    b10 = new Box(510,368);
    b11 = new Box(540,368);
    b12 = new Box(570,368);
    b13 = new Box(600,368);
    b14 = new Box(630,368);
    b15 = new Box(660,368);
    b16 = new Box(690,368);
    b17 = new Box(540,318);
    b18 = new Box(570,318);
    b19 = new Box(600,318);
    b20 = new Box(630,318);
    b21 = new Box(660,318);
    b22 = new Box(570,268);
    b23 = new Box(600,268);
    b24 = new Box(630,268);
    b25 = new Box(600,218);

    g1 = new Ground(1000,300,180,15);
    g2 = new Ground(600,400,240,15);

    mHex = new Polygon(150, 400, 30);

    sling = new SlingShot(mHex.body,{x:150, y:400});
}

function draw(){
    background(0);
    Engine.update(engine);

    g1.display();
    g2.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();


   mHex.display();
    sling.display();
}

// function mouseDragged(){
//     Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
// }


// function mouseReleased(){
//     sling.fly();
// }

// function keyPressed(){
//     if(keyCode === 32){
//         sling.attach(hex.body);
//     }
// }