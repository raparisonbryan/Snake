class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.blockSize = SQUARE_SIZE;
        this.blocks = [];
        this.addBlock(this.x,this.y); 
        this.state = true;
    }



    addBlock(x,y){
        const block = new Block(x,y,this.blockSize);
        this.blocks.push(block);
    }
    calculateNewBlockPosition(head){
        let {x,y} = this.blocks[this.blocks.length -1];
        switch(currentDirection){
            case 'gauche':
                x = head.x + 1;
                break;
            case 'droite':
                x = head.x - 1;
                break;
            case 'Bas':
                y = head.y - 1;
                break;
            case 'Haut':
                y = head.y + 1;
                break;
            default:
                break;

        }
        return {x,y};

    }

    hack(){
        const head = this.blocks[0];
        if(head.x === faille.x && head.y === faille.y){
            faille.setRandomPosition();
            const {x,y} = this.calculateNewBlockPosition(head);
            this.addBlock(x,y);
        }
    }
    moveHead(){
        
        const head = this.blocks[0];
        head.oldX = head.x;
        head.oldY = head.y;
        switch (currentDirection) {
            case 'gauche':
                head.x = head.x - 1;
                break;
            case 'droite':
                head.x = head.x + 1;
                break;
            case 'Bas':
                head.y = head.y + 1;
                break;
            case 'Haut':
                head.y = head.y - 1;
                break;
            default:
                break;
        }
        head.teleportIfOutOfMap();
    }
    blockTouchHead(block){
        const head = this.blocks[0];

        return(head.x === block.x && head.y === block.y);
    }
    update(){

        this.moveHead();
        this.hack();
        for(const [index,block] of this.blocks.entries()){
            if(index > 0){
               const {oldX,oldY} = this.blocks[index -1];
               block.setPosition(oldX,oldY);
               if(this.blockTouchHead(block)){
                this.state = false;
            }
            }

            block.draw();
        }
        


    }
}