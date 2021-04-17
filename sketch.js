
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;




function preload(){


}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box = new Box(100,50,20,20);

   circle1 = new Circle(500,200,10,10);
   circle2 = new Circle(600,100,10,10);
   circle3 = new Circle(400,300,10,10);       

	Chain=new chain(box.body,Circle.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
box.display();
circle1.display();
circle2.display();
circle3.display();
Chain.display();

}



