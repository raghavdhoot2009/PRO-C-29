class Polygon {
    constructor(x,y,r) {


    this.body=Bodies.circle(50,200,20);
    World.add(world,polygon);
    }
    display(){
    var POS=this.body.position;
    rectMode(CENTER);
    rect(this.POS.x,this.POS.y,this.POS.r);
    }
    }
    