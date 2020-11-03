const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world , object, object_2;


function setup() {
  var canvas = createCanvas(400,400);

  var object_option = {
    isStatic:true
  }
  var object_2_option = {
    restitution:1.0
  }

  engine = Engine.create();
  world = engine.world;
  object = Bodies.rectangle(200,390,200,50,object_option);
  object_2 = Bodies.circle(200,200,20,object_2_option);

  World.add(world,object);
  World.add(world,object_2);
  
  console.log(object.position.x);
  console.log(object.position.y);

  
  
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(object_2.position.x , object_2.position.y ,20,20);

  
  drawSprites();
}