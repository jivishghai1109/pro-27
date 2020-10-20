
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5;
var rof;
var b1Diameter=50;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bob(300,500,25);
	b2 = new Bob(350,500,25);
	b3 = new Bob(400,500,25);
	b4 = new Bob(450,500,25);
	b5 = new Bob(500,500,25);

	rof = new Roof(400,285,280,30);

	Chain = new Chain(rof.body,b1.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  rof.display();
  Chain.display();
  drawSprites();
 
}



