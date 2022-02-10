const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bowlingBall, pin1, trackImg, track,engine,world;

function preload(){
  trackImg = loadImage("track.png");
}

function setup() {
  createCanvas(1300,800); 
  engine = Engine.create();
  world = engine.world;
  bowlingBall = new Ball(650,500,50,50);
  //bowlingBall.scale=0.1;
  pin1 = new Pin(650,50,40,40);
  track = createSprite(displayWidth/2,displayHeight/2,20,20);
  track.addImage(trackImg);
  track.scale=2.5;

  
}

function draw() {
  background(0);
  drawSprites();  
  bowlingBall.display();
  pin1.display();

  
}
