const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
function preload()

{
	
}

function setup() {
	createCanvas(1200, 600);
    rectMode(CENTER);

  
	
	
	
	engine = Engine.create();
	world = engine.world;
  
  paper = new Paper(200,400,70);
  ground = new Ground(600,580,1200,20);
  dustbin1 = new Dustbin(800,500,10,120)	 
  dustbin2 = new Dustbin(1000,500,10,120)	
  dustbin3 = new Dustbin(900,555,190,10)
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  //drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85 , y:-85});
}

}



