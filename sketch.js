
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, basket

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new PaperClass(200, 450, 40);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	paper.display();

	drawSprites();

}



