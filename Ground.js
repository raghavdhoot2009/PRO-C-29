class Ground{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(450,390,900,20,options);
      this.width = 900;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(this.pos.position.x, this.pos.position.y, this.width, this.height);
    }
  }
