let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let gameState = document.getElementById('state');

gameState.innerHTML = "RUNNING";

canvas.width = 500;
canvas.height = 500;

let EL = new EntityList(ctx);

let player = new Player(50, 150);

EL.registerEntity(player);

EL.registerEntity(new Enemy(400, Math.random() * (400 - 100) + 100, 100 + 200));
EL.registerEntity(new Enemy(400, Math.random() * (400 - 100) + 100, 200 + 200));
EL.registerEntity(new Enemy(400, Math.random() * (400 - 100) + 100, 300 + 200));
EL.registerEntity(new Enemy(400, Math.random() * (400 - 100) + 100, 400 + 200));

let running = true;

function draw() {
    if (!running) {
        return false;
    }

    EL.draw();

    let enemies = EL.getType('enemy');
    let bullets = EL.getType('bullet');

    if (enemies.length == 0) {
        gameState.innerHTML = "WINNER";
    }

    for (let i = 0; i < bullets.length; i++) {

        if (bullets[i].hasReachedGoal()) {
            EL.removeEntity(bullets[i]);
        }

        if (bullets[i].source == "enemy" && bullets[i].checkHit(player)) {
            gameState.innerHTML = "OVER | KILLED BY ENEMIES";
            running = false;
        }

        for (let e = 0; e < enemies.length; e++) {
            if (bullets[i].source == "player" && bullets[i].checkHit(enemies[e])) {
                EL.removeEntity(enemies[i]);
            }
        }
    }

    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].canShoot()) {
            EL.registerEntity(enemies[i].shoot(player.getX(), player.getY()));
        }
    }
}

setInterval(draw, 1);

document.addEventListener('keydown', press)

function press(e) {
    if (e.keyCode === 38 || e.keyCode === 87 || e.keyCode === 90) {
        player.moveDown();
    }

    if (e.keyCode === 40 || e.keyCode === 83) {
        player.moveUp();
    }

    if (e.keyCode === 32) {
        EL.registerEntity(player.shoot());
    }
}