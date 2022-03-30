class Snake{
    constructor(size){
        this.x = 0;
        this.y = 0;
        this.blockSize = size;
        this.blocks = [];
        this.addBlock(this.x,this.y); 
        
    }



    addBlock(x,y){
        const block = new Block(x,y,this.blockSize);
        this.blocks.push(block);
    }

    moveHead(){
        const head = this.blocks[0];
        switch (currentDirection) {
            case 'gauche':
                head.x = head.x - 1;
                break;
            case 'droite':
                head.x = head.x + 1;
                break;
            case 'bas':
                head.y = head.y + 1;
                break;
            case 'haut':
                head.y = head.y - 1;
                break;
            default:
                break;
        }
    }

    update(){
        for(const block of this.blocks){
            block.draw();
        }
        this.moveHead();
        
        


    }
}