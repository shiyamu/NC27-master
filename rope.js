class Rope{
    constructor(body1,body2,xoffset){
        this.xoffset = xoffset;
        var opt={
            bodyA: body1,
            bodyB: body2,
           pointB : {x : this.xoffset,y : 0}
        }
        this.rope = Constraint.create(opt);
        World.add(world,this.rope);
    }
    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;
        strokeWeight(4)
        stroke("yellow")
        line(point1.x,point1.y,point2.x+this.xoffset,point2.y)
    }
}