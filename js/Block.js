class Block{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
    }
    teleportIfOutOfMap(){
        if(this.x < 0){
            this.x = (GAME_SIZE / this.size);

        } else if(this.x > (GAME_SIZE / this.size))]
    }
    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x * this.size,this.y * this.size,this.size,this.size);
    }
}