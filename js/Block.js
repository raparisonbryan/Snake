class Block{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.oldX = x;
        this.oldY = y;
    }
    setPosition(x,y){
        this.oldX = this.x;
        this.oldY = this.y;
        this.x = x;
        this.y = y;
    }
    teleportIfOutOfMap(){
        if(this.x < 0){
            this.x = (GAME_SIZE / this.size);

        } else if(this.x > (GAME_SIZE / this.size)){
            this.x = 0;
        }
        if(this.y < 0){
            this.y = (GAME_SIZE / this.size);
        }
        else if(this.y > (GAME_SIZE / this.size)){
            this.y =0
        }
    }
    draw(){
        ctx.fillStyle = "red";
        if(this === snake.blocks[0]){
            ctx.fillStyle = "white";
        }
        ctx.fillRect(this.x * this.size,this.y * this.size,this.size,this.size);
    }
}