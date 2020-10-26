const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1, box2, box3, box4, box5, box7, box8, box9, box10, box11, box12;
var box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25;
var slingshot, platform1, platform2;
var engine, world;
var polyObject;
var backgroundImage;

var bg = "light.jpg";

var score = 0;

function preload(){
  timeFun();
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-10,width,20);
  platform1 = new Ground(600,height-40,250,10);
  platform2 = new Ground(900,height-200,250,10);
  
  polyObject = new Polygon(200,200);

  slingshot = new Slingshot(polyObject.body,{x:200,y:200});

  box1 = new Box(510,height-70,"yellow");
  box2 = new Box(540,height-70,"yellow");
  box3 = new Box(570,height-70,"yellow");
  box4 = new Box(600,height-70,"yellow");
  box5 = new Box(630,height-70,"yellow");
  box6 = new Box(660,height-70,"yellow");
  box7 = new Box(690,height-70,"yellow");
  
  box8 = new Box(540,height-110,"pink");
  box9 = new Box(570,height-110,"pink");
  box10 = new Box(600,height-110,"pink");
  box11 = new Box(630,height-110,"pink");
  box12 = new Box(660,height-110,"pink");
  
  box13 = new Box(570,height-150,"lightblue");
  box14 = new Box(600,height-150,"lightblue");
  box15 = new Box(630,height-150,"lightblue");
  
  box16 = new Box(600,height-190,"lightgreen");
  
  box17 = new Box(810,height-230,"yellow");
  box18 = new Box(840,height-230,"yellow");
  box19 = new Box(870,height-230,"yellow");
  box20 = new Box(900,height-230,"yellow");
  box21 = new Box(930,height-230,"yellow");
  box22 = new Box(960,height-230,"yellow");
  box23 = new Box(990,height-230,"yellow");

  box24 = new Box(840,height-270,"pink");
  box25 = new Box(870,height-270,"pink");
  box26 = new Box(900,height-270,"pink");
  box27 = new Box(930,height-270,"pink");
  box28 = new Box(960,height-270,"pink");

  box29 = new Box(870,height-310,"lightblue");
  box30 = new Box(900,height-310,"lightblue");
  box31 = new Box(930,height-310,"lightblue");

  box32 = new Box(900,height-350,"lightgreen");
}

function draw() {
  if (backgroundImage){
    background(backgroundImage);
  }
  text("Score: "+score,width-100,100);

  Engine.update(engine);

  ground.display();
  platform1.display();
  platform2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  
  box13.display();
  box14.display();
  box15.display();
  
  box16.display();
  
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();

  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  box29.display();
  box30.display();
  box31.display();
  
  box32.display();

 
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();

  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  
  box13.score();
  box14.score();
  box15.score();
  
  box16.score();
  
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();

  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();

  box29.score();
  box30.score();
  box31.score();
  
  box32.score();

  slingshot.display();
  polyObject.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polyObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
    slingshot.attach(polyObject.body);
  }
}

async function timeFun(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  var daytime = responseJSON.datetime;
  var hour = daytime.slice(11,13);

  
  if (hour>=06 && hour<=15){
    bg = "light.jpg";
  }
  else{
    bg = "dark.jpg";
  }

  backgroundImage = loadImage(bg);
}