var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
let container = document.getElementById('Container');

canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight - 35;


const scale = 20 ;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.size = canvas.height / scale;

    }
    draw(){
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, this.size,this.size);
    }

}

(function setup(){
    snake = new Snake();
    snake.draw();
}())




/*function Snake(){
    this.x = 0;
    this.y = 0;

    this.draw = function(){
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, scale,scale);
    }


}*/
