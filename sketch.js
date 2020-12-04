
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	mango1 =new Mango(1100,300,60);
	mango2 =new Mango(1200,320,60);
	mango3 =new Mango(1180,200,60);
	mango4 =new Mango(1300,300,60);
	mango5 =new Mango(1300,200,60);
	mango6 =new Mango(1250,120,60);
	mango7 =new Mango(1400,280,60);

	stone =new Stone(700,300,70);

	tree= new Tree(1000,50);
	boy= new Boy(200,430);
	launcher = new MangoLauncher(stone.body,{x:240, y:500});

	ground=createSprite(width/2,700, width,10);
	ground.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, 720, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  
  drawSprites();
  boy.display();
  tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
  stone.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    this.launcher.fly();
}
function detectcollision(Stone,Mango){
	mangopos=Mango.body.position
	stonepos=Stone.body.position

	var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y)
	if(distance<=Stone.r+Mango.r){
		Matter.Body.setStatic(Mango.body,false)
	}
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:300,y:500})
		launcher.attach(stone.body)
	}
}

