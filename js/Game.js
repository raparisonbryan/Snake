const GAME_SIZE = 600;
const SQUARE_SIZE = 20;
const canva = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let currentDirection = 'haut';
const snake = new Snake(SQUARE_SIZE);
function clearScreen(){
    ctx.clearRect(0,0,GAME_SIZE,GAME_SIZE);
}
function update(){
    clearScreen();
    snake.update();
    console.log("refresh game");
    setTimeout(update,300);
}

function start(){
    update();
}

start();