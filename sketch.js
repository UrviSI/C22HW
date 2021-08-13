const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var b1,b2,b3,b4,b5
var r1,r2,r3,r4,r5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.8
	}

	var roof_options={
		isStatic:true			
	}
	b1 = Bodies.circle(280,200,25,ball_options);
	World.add(world,b1);

	b2 = Bodies.circle(330,200,25,ball_options);
	World.add(world,b2);

	b3 = Bodies.circle(380,200,25,ball_options);
	World.add(world,b3);

	b4 = Bodies.circle(430,200,25,ball_options);
	World.add(world,b4);

	b5 = Bodies.circle(480,200,25,ball_options);
	World.add(world,b5);

	roof = Bodies.rectangle(380,100,230,20,roof_options);
    World.add(world,roof);

	constr(r1,b1,17)
	constr(r2,b2,5)
	constr(r3,b3,0)
	constr(r4,b4,5)
	constr(r5,b5,17)
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  push();
  strokeWeight(2);
  stroke(255);
  line(b1.position.x,b1.position.y,280,roof.position.y);
  line(b2.position.x,b2.position.y,330,roof.position.y);
  line(b3.position.x,b3.position.y,380,roof.position.y);
  line(b4.position.x,b4.position.y,430,roof.position.y);
  line(b5.position.x,b5.position.y,480,roof.position.y);
  
  pop();
  
  //create ellipse shape for multiple bobs here
  ellipse(b1.position.x,b1.position.y,25);
  ellipse(b2.position.x,b2.position.y,25);
  ellipse(b3.position.x,b3.position.y,25);
  ellipse(b4.position.x,b4.position.y,25);
  ellipse(b5.position.x,b5.position.y,25);

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(b1,{x:0,y:0},{x:0.1,y:0});
    }
}


function constr(con,ball,len){
	con = Matter.Constraint.create({
        bodyA: ball,
        pointA:{x:0,y:0},
        bodyB:roof,
        pointB:{x:0,y:0},
        length:300+len,
        stiffness:0.1
  });
  World.add(world,con)
}