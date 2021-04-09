class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.0,
            length: 150
        }
       
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            
            pop();
        }
    }
    
}