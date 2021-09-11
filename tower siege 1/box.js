class Box
{
    //to store natural and physical properties
    constructor(a,b,c,d)//add all the unknown values of the properties inside the constructor()
    {
    //the physical properties are isStatic, restitution(bounciness), friction, density
    var options={
  //  isStatic:false,
    restitution:0.4,
    friction:0,
   // density:0
    }
    //the natural properties are x, y, width, height, radius
    this.x=a;
    this.y=b;
    this.width=c;
    this.height=d;
    this.visibility=225;

    //creating a sprite of the object which is called a body 
    this.body=Bodies.rectangle(a,b,c,d,options)
    World.add(world,this.body)
    }
    
    //to display the characters in the browser
    display()
    {
        if(this.body.speed<3)
        {
            var boxPosition=this.body.position
            fill("pink")
            
            //to maintain the order of the natural properties
            rect(boxPosition.x,boxPosition.y,this.width,this.height)
        }
        else
        {
            World.remove(world,this.body)
            push()
            this.visibility=this.visibility-5
            pop()
        }

    }
    
    }