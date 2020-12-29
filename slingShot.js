class Slingshot{

    constructor(bodyA,pointB){

        var options = {

            bodyA: bodyA,
            pointB: pointB,
            length: 500,
            stiffness: 1.2
        }
        this.pointB = pointB
         this.sling = Matter.Constraint.create(options)
         World.add(world,this.sling)
    }


    fly(){

        this.sling.pointA = null;
    }

    display(){

        

if(this.sling.bodyA){
var pointA = this.sling.bodyA.position

var pointB = this.pointB
push()
stroke("green")
strokeWeight(5)
line(pointA.x,pointA.y,pointB.x,pointB.y)

pop()

}
    }
}
