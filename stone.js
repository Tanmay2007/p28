class bob {

    constructor (x,y,r)
    
    {
    
    var options = {
    
    isStatic:true,
    restitution:0,
    friction:1,
     density:1.2
    
    }
     this.x= x;
    
    this.y =y;
    
    this.r =r
    
    this.body=Bodies.circle(this.x, this.y, this.r/2, options)

    World.add (world,this.body)
    } 

    fly(){
        this.body=null;
    }
    display()
    
    {
if (this.body){
    var pos=this.body.position;
    
    push()
    translate(pos.x, pos.y);
     ellipseMode(CENTER)
    strokeWeight(3);
    fill("pink")
        ellipse(0,0,this.r)
    
    pop()

    }
}

}