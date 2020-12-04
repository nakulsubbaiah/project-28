class MangoLauncher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }


    display(){
        image (this.sling,200,20);
        
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();
            strokeWeight(4);
            stroke(49,22,8);
            
           line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
           image (this.sling,pointA.x-30,pointA.y -10,15,30);
           pop();        
        
    }
    
}