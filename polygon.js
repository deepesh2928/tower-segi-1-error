class Polygon {
    constructor(x, y ,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
      this.img=loadImage("polygon.png");
      this.hexagon = Bodies.circle( x, y, r, options,6);
      this.radius=r;
      this.x=x;
      this.y=y;
      World.add(world, this.hexagon);
    }
    display(){
      imageMode(CENTER);
      fill(255,0,0);
      image(this.img,this.x, this.y,this.radius*2,this.radius*2);
    }
  };  