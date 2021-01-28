const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg,platform1,ground,platform2,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,slingshot;
function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.rectangle(200,200,20,20);
    World.add(world,polygon);

    //Tower1
    //layer1
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);

    //layer2
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

    //layer3
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);

    //top layer
    block16 = new Block(390,155,30,40);

    //Tower2
    block17 = new Block(640,175,30,40);
    block18 = new Block(670,175,30,40);
    block19 = new Block(700,175,30,40);
    block20 = new Block(730,175,30,40);
    block21 = new Block(760,175,30,40);

    block22 = new Block(670,135,30,40);
    block23 = new Block(700,135,30,40);
    block24 = new Block(730,135,30,40);

    block25 = new Block(700,95,30,40);

    slingshot = new SlingShot(this.polygon,{x:200,y:200});

    ground = new Ground(750,390,1500,20);
    platform1 = new Ground(390,300,250,10);
    platform2 = new Ground(700,200,200,10);
}

function draw(){
    background(58,45,45);
    Engine.update(engine);

    platform1.display();
    platform2.display();

    ground.display();

    fill(130,203,239);
    block1.display(); 
    block2.display(); 
    block3.display(); 
    block4.display(); 
    block5.display(); 
    block6.display(); 
    block7.display(); 
    fill(255,199,204);

    block8.display(); 
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill(53,209,211);

    block13.display();
    block14.display();
    block15.display();
    fill(130,129,130);

    block16.display();
    fill(130,203,239);
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    fill(53,209,211);
    block22.display()
    block23.display()
    block24.display()
    fill(255,199,204);
    block25.display()
    

    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)
    
    slingshot.display();
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x: mouseX,y:mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
