class chain{

    constructor(bodyA,bodyB){

var c={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.04,
    length:10
}
this.chain=Constraint.create(c);
World.add(world,this.chain);

    }

    display(){
        var A=this.chain.bodyA.position;
        var B = this.chain.bodyB.position;

        stroke ("red");
        strokeWeight(3);

        line(A.x,A.y,B.x,B.y);
    }

}