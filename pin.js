class Pin{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.x=x;
            this.y=y;
            this.image = loadImage("pin.png");
            World.add(world, this.body);
      }
    
      display() {
        this.body.position.x = this.x;
        this.body.position.y = this.y;
        
            var angle = -90;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          
        
      }
    }
    