
const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine
const Constraint = Matter.Constraint
var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10
var platform
var ball
var gameState = "onSling"
var sling;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  ball=new Box(645,145,15,15)
  box1 = new Box (300,300,25,25)
  box2 = new Box (330,300,25,25)
  box3 = new Box (310,300,25,25)
  box4 = new Box (320,300,25,25)
  box5 = new Box (305,295,20,20)
  box6 = new Box (315,295,20,20)
  box7 = new Box (325,295,20,20)
  box8 = new Box (310,290,15,15)
  box9 = new Box (320,290,15,15)
  box10 = new Box (315,285,10,10)
  platform = new Ground(300,345,300,10)

  // create a sling object from SlingShot class and pass the ball.body and ,{x:645,y:145} as parameter
  sling = new SlingShot (ball.body,{x:645,y:145})

}

function draw() {
  background(255);  
  Engine.update(engine);
  box1.display();
  box4.display();  box5.display();
  box3.display();  box6.display();  box9.display(); ball.display();
  box2.display();  box7.display();  box8.display();  box10.display(); platform.display();
  // display the sling.
  sling.display();
    drawSprites();
}
function mouseDragged(){
  if(gameState!=="launch"){
    // set the position of ball.body same as mouseX and mouseY
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
    // refer Angry bird code for ref

}
}


function mouseReleased(){
  // call fly() of sling
  sling.fly();
  gameState = "launch"
}

function keyPressed(){
  if(keyCode === 32){
      // attach the ball.body to sling,, ref code from Angry bird
      sling.attach(ball.body);
      gameState = "onSling"
  }
}