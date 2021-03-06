
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render=Matter.Render;
const Constraint=Matter.Constraint;
var stoneObj;
var ground



function preload()
{
	boy=loadImage("boy.png");
	
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

    stoneobj=new stone(100,100,20);
	

	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(10,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(1180,223,40);



	ground=new Ground(width/2,600,width,20); 
	launcherobj=new Launcher(stoneobj.body,{x:235,y:420});
	treeobj=new tree(1050,300,400,500);
	

//1180,223
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  Engine.update(engine);
  image(boy,234,400,100,500);
  ground.display();
  treeobj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stoneobj.display();
  launcherobj.display();

  detectcollistion(stoneobj,mango1);
  detectcollistion(stoneobj,mango2);
  detectcollistion(stoneobj,mango3);
  detectcollistion(stoneobj,mango4);
  detectcollistion(stoneobj,mango5);
  detectcollistion(stoneobj,mango6);
  detectcollistion(stoneobj,mango7);
  detectcollistion(stoneobj,mango8);
  detectcollistion(stoneobj,mango9);
  detectcollistion(stoneobj,mango10);
  detectcollistion(stoneobj,mango11);
  detectcollistion(stoneobj,mango12);

  fill("white");
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);  
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  stone.fly();
}


   function detectcollistion(lstone,lmango){

	   mangoBodyPosition=lmango.body.position

	   stoneBodyPosition=lstone.body.position


	   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	   if(distance<=lmango.radius+lstone.radius){
		   Matter.Body.setStatic(lmango.body,false);

	   }
   }


