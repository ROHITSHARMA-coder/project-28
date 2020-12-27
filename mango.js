class mango{

    constructor(x,y,radius){

    var option={
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.radius=radius
    this.image=loadImage("mango.png");
    this.body=Bodies.circle(x,y,radius,option)
    World.add(world,this.body)

}

display(){
    var mangopos=this.body.position;
    push()
    translate(mangopos.x,mangopos.y);
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.image,0,0,this.radius*2,this.radius*2)
    pop()
}

}