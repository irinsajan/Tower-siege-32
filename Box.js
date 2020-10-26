class Box{
    constructor(x,y,color){
        var options = {
            'restitution': 0.4,
            'friction': 0,
        }
        this.body = Bodies.rectangle(x,y,30,40,options);
        World.add(world,this.body);
        this.color = color;
        this.visibility = 255;
    }

    score(){
        if (this.visibility<0 && this.visibility>=-105){
            score++;
        }
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle; 
       // console.log(this.body.speed);      

        if(this.body.speed<3){
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);            
            strokeWeight(2);
            fill(this.color);
            rect(0,0,30,40);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility-5;
            pop();
        }
    }
}