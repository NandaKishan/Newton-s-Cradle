class Rope
{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointA : {x : this.offsetX, y : this.offsetY},
            stiffness : 0.2,
            length : 200
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }

    display()
    {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);
        line(pointA.x + this.offsetX,pointA.y + this.offsetY,pointB.x,pointB.y);
    }
}