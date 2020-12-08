const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof();
	ball1 = new Ball(300,400);
	//Create till ball5

	//console.log(ball1.ball)

	//Create rope objects
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

 
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		//use apply force
	}
}