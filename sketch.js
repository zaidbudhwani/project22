var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxp=width/2-100;
	 boxy=610;
	 boxls=createSprite(boxp,boxy,20,100);
	 boxls.shapeColor="red";

	 boxlb=Bodies.rectangle(boxp+20,boxy,20,100,{isStatic:true});
	 World.add(world,boxlb);


	 boxb=createSprite(boxp+100,boxy+40,200,20);
	 boxb.shapeColor="red";

	 boxbb=Bodies.rectangle(boxb+100,boxy+45-20,200,20,{isStatic:true});
	 World.add(world,boxbb);

	 boxrs=createSprite(boxp+200,boxy,20,100);
	 boxrs.shapeColor="red";

	 boxrb=Bodies.rectangle(boxp+200-20,boxy,20,100,{isStatic:true});
	 World.add(world,boxrb);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false);

    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



