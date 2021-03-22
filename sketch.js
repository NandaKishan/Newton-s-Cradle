
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope,rope2,rope3,rope4,rope5;
var bob,bob2,bob3,bob4,bob5;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	roof = new Roof(width/2,50,456,40);
  
	bob = new Bob(400,250,35);
	bob2 = new Bob(500,250,35);
	bob3 = new Bob(600,250,35);
	bob4 = new Bob(700,250,35);
	bob5 = new Bob(800,250,35);

	rope = new Rope(roof.body,bob.body,0,0);
	rope2 = new Rope(roof.body,bob2.body,30,0);
	rope3 = new Rope(roof.body,bob3.body,60,0);
	rope4 = new Rope(roof.body,bob4.body,90,0);
	rope5 = new Rope(roof.body,bob5.body,120,0);
}


function draw() {
//   rectMode(CENTER);
  background(127);
  Engine.update(engine);
  roof.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
}



