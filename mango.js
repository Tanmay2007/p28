class mango {
    constructor(x,y,d){
            var options={
                restitution:0.5,
                isStatic:true,
                friction:1,
                density:0,
            }

            this.mango=Bodies.circle(x,y ,d,options)
            this.img=loadImage("mango.png")
            this.d=d
            World.add(world,this.mango)
    }

        display(){
            push( )
            translate(this.mango.position.x,this.mango.position.y)
            imageMode(CENTER)
            image(this.img,0,0,this.d,70)
            pop()

        }


}