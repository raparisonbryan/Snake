const GAME_SIZE = 500;
const SQUARE_SIZE = 10;
const canva = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let currentDirection = 'droite';
const snake = new Snake(SQUARE_SIZE);
function clearScreen(){
    ctx.clearRect(0,0,GAME_SIZE,GAME_SIZE);
}
function update(){
    clearScreen();
    snake.update();
    console.log("refresh game");
    setTimeout(update,100);
}

function start(){
    detectKeyPressed();
    update();
    
}

function detectKeyPressed(){
    document.addEventListener('keydown', function(event){
        
        switch (event.key) {
            case 'ArrowLeft':
                currentDirection = 'gauche';
            break;
            case 'ArrowRight':
                currentDirection = 'droite';
            break;
            case 'ArrowUp':
                currentDirection = 'Haut';
            break;
            case 'ArrowDown':
                currentDirection = 'Bas';
            break;
        
            default:
                break;
        }
        head.teleportIfOutOfMap();
    } );
}

start();