const GAME_SIZE = 500;

const SQUARE_SIZE = 10;
const canva = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let currentDirection = "droite";
const faille = new Faille();
const snake = new Snake(SQUARE_SIZE);
const level1 = '{"interval": "100"}';
const level2 = '{"interval": "50"}';
const level3 = '{"interval": "25"}';
const simply = JSON.parse(level1);
const middle = JSON.parse(level2);
const hard = JSON.parse(level3);
const lvl1 = document.getElementById("simply");
const lvl2 = document.getElementById("middle");
const lvl3 = document.getElementById("hard");

function clearScreen() {
  ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE);
}

function update() {
  if (snake.state) {
    clearScreen();
    snake.update();
    faille.draw();
    console.log("refresh game");

    if (lvl1.checked) {
      setTimeout(update, simply.interval);
    } else if (lvl2.checked) {
      setTimeout(update, middle.interval);
    } else if (lvl3.checked) {
      setTimeout(update, hard.interval);
    }
  }
}

function start() {
  detectKeyPressed();
  update();
}

function detectKeyPressed() {
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
        currentDirection = "gauche";
        break;
      case "ArrowRight":
        currentDirection = "droite";
        break;
      case "ArrowUp":
        currentDirection = "Haut";
        break;
      case "ArrowDown":
        currentDirection = "Bas";
        break;

      default:
        break;
    }
    head = snake.blocks[0];
    head.teleportIfOutOfMap();
  });
}

start();
