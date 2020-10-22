class stand {
constructor(x,y,width,height) {
var options = {
isStatic: true
}
this.body = Bodies.rectangle(x,y,200,20,options);
this.width = 200;
this.height = 20;
World.add(world, this.body);
}
display(){
var pos1=this.body.position;
rectMode(CENTER);
fill("brown");
rect(this.pos1.position.x, this.pos1.position.y, this.width, this.height);
}
}
