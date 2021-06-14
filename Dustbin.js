class Dustbin{
    constructor(x,y,width,height){
    var options = {
        isStatic : true,
        'restituion' : 1,
        'friction' : 1,
        'density' : 1,    
      }
 this.body=Bodies.rectangle(x,y,width,height,options);      
 this.width = width ;
 this.height = height;
 World.add(world,this.body);
 }
 display(){
     rectMode(CENTER);
     fill("orange");
     rect(this.body.position.x,this.body.position.y,this.width,this.height) 
    
}
}