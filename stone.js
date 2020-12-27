class stone{

    constructor(x,y,radius){
    
    var option={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.radius=radius
    this.image=loadImage("stone.png")
    this.body=Bodies.circle(x,y,radius,option)
   World.add(world,this.body)

}

display(){
    var stonepos=this.body.position;
    push()
    translate(stonepos.x,stonepos.y)
    
    imageMode(CENTER)
    ellipseMode(RADIUS)
    image(this.image,0,0,this.radius*2,this.radius*2)
    pop()
}

}