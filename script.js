let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let EL = new EntityList(ctx);

let player = new Player(50, 50);

EL.registerEntity(player);

let testEnemy = new Enemy(400, Math.random() * (400 - 100) + 100, 20);

EL.registerEntity(testEnemy);

EL.registerEntity(new Enemy(400, Math.random() * (400 - 100) + 100, 20));
EL.registerEntity(new Enemy(400, Math.random() * (400 - 100) + 100, 20));
EL.registerEntity(new Enemy(400, Math.random() * (400 - 100) + 100, 20));


let its = 0;

function draw() {
    EL.draw();
    if (testEnemy.canShoot()) {
        EL.registerEntity(testEnemy.shoot(player.getY(), player.getY()));
    }

}

setInterval(draw, 60);

