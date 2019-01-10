let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let EL = new EntityList(ctx);

let player = new Player(50, 50);

EL.registerEntity(player);

EL.registerEntity(new Enemy(400, Math.random() * (400 - 100) + 100, 20));
EL.registerEntity(new Enemy(400, Math.random() * (400 - 100) + 100, 30));
EL.registerEntity(new Enemy(400, Math.random() * (400 - 100) + 100, 40));
EL.registerEntity(new Enemy(400, Math.random() * (400 - 100) + 100, 50));

let running = true;

function draw() {
    if (!running) {
        return false;
    }
    EL.draw();

    let enemies = EL.getType('enemy');
    let bullets = EL.getType('bullet');

    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].checkHit(player)) {
            console.log(bullets[i]);
            console.log(player);
            console.log("KILLED");
            running = false;
        }
    }

    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].canShoot()) {
            EL.registerEntity(enemies[i].shoot(player.getY(), player.getY()));
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
}