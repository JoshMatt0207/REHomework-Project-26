class Board{
   constructor(x,y,w,h){
     
    var opt={
      isStatic:true
    }
    
    
   

    this.body=Bodies.rectangle(x,y,w,h,opt)
    this.w=w
    this.h=h
    
    World.add(world, this.body)
    this.image=loadImage("assets/board.png")
   }
 display(){
 image(this.image, this.body.position.x, this.body.position.y, this.w, this.h)

 }
}