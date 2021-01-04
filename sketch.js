
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone,BoyImage,ground,stoneimg,treeImg ;
function preload()
{
	 BoyImage=loadImage("boy.png")
	 stoneimg=loadImage("stone.png")
	 treeImg=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		stone =new bob(260,490,40)
		ground=new Ground(400,685,850,35)
		mango1=new mango(735,230,60,)
		mango2=new mango(605,220,60,)
		mango3=new mango(755,290,60,)
		mango4=new mango(655,250,60,)
		mango5=new mango(705,130,60,)
		mango6=new mango(705,340,60,)
		mango7=new mango(605,340,60,)
		mango8=new mango(575,300,60,)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0)
  
  ground.display()
 
  imageMode(CENTER)
  image(treeImg,645,350,300,650)
  image(stoneimg,260,490,80,80)
  image(BoyImage,250,500,300,300)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

	 detectCollision(stone,mango1)
	 detectCollision(stone,mango2)
	 detectCollision(stone,mango3)
	 detectCollision(stone,mango4)
	 detectCollision(stone,mango5)
	 detectCollision(stone,mango6)
	 detectCollision(stone,mango7)
	 detectCollision(stone,mango8)
  drawSprites();
 
}

function detectCollision(lstone,lmango){
	mangopos=lmango.body.position
	stonepos=lstone.body.positio
	var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y)
	if(distance<=mango.d+lstone.r){
		Matter.body.setStatic(lmango.body,false)
	}
}

function mouseDragged()
{
Matter.body.setPosition(stone.body,{x:mouseX,y:MouseY})
}

function mouseReleased(){
attach.fly();

}

function keyPressed(){
	if (keyCode===32){
Matter.Body.setPosition(stone.body,{x:260,y:490})
   }

}