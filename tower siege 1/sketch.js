const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint
//const Render = Matter.Render

var ground1
var ground2
var ground3
var box1
var box2
var box3
var box4
var box5
var hex1
var sling1
var engine, world
function setup() {
  createCanvas(1600,800);
  
  engine = Engine.create();
	world = engine.world;
  box1=new Box(430,500,50,50)
  box2=new Box(500,500,50,50)
  box3=new Box(465,450,50,50)
  box4=new Box(1135,300,50,50)
  box5=new Box(975,300,50,50)
  hex1=new Hex(300,200,100,100)
  sling1=new Slingshot(hex1.body,{x:350,y:250})
  ground1=new Ground(5,780,1700,20)
  ground2=new Ground(300,550,400,20)
  ground3=new Ground(900,350,400,20)
  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  hex1.display();
  sling1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  text(mouseX+","+mouseY,mouseX,mouseY)
  
}

function mouseDragged()
{
Matter.Body.setPosition(hex1.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
sling1.fly()
}