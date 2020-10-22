class Slingshot{
constructor(pointA, pointB){
var options = {
pointA: pointA,
pointB: pointB,
stiffness: 0.04,
length: 10
}

this.pointB = pointB
this.sling = Constraint.create(options);
World.add(world, this.sling);
}

FLY(){
this.sling.pointA = null;
}

display(){

if(this.sling.pointA){
var pointA = this.pointA;
var pointB = this.pointB;
push();
line(pointA.x, pointA.y, pointB.x, pointB.y); 

pop();

}
}
    
}