const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, trash1, trash2, trash3, ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	
	
	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);

	trash1 = new trash(635,645,150,20);
	trash2 = new trash(550,645,20,100);
	trash3 = new trash(720,645,20,100);

	paper1 = new paper(150, 650, 50);

	
  
}


function draw() {
  background(0);
  Engine.run(engine);
  //keyPressed();

  ground.display(); 
 
  trash1.display();
  trash2.display();
  trash3.display();

  paper1.display();
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.applyForce(paper1.body,paper1.position,{x:85,y:-85});
	 }
   }

