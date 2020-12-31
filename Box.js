class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 30, 50, options);
    this.x=x;
    this.y=y;
    World.add(world, this.body);
  }
  display(){
    rectMode(CENTER);
    fill(255,0,0);
    rect(this.x, this.y, 30, 50);
  }
};
