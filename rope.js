
class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA = pointA
		this.pointB = pointB
		this.body1 = body1
		this.body2 = body2

	//create rope constraint here
	var con = Matter.Constraint.create({
        bodyA: body1,
        pointA:{x:0,y:0},
        bodyB:body2,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
  });
World.add(world,con)

	}


    //create display() here 
	display(){
		var pointA = this.rope.BodyA.position
		var pointB = this.rope.BodyB.position
		strokeWeight(2)
		stroke(255);
		line(pointA.x,pointA.y,pointB.x,pointB.y);
	}

}
