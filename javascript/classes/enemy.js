class Enemy extends Entity {

    constructor(x, y, fireRate) {
        super(x, y, 'enemy');
        this.fireRate = fireRate;
        this.ticks = 0;
        this.model = new Image();
        this.model.src = 'img/ufo.svg';
    }

    draw(ctx) {
        ctx.drawImage(this.model, super.getX(), super.getY(), 50, 50);
    }

    shoot(tx, ty) {
        return new Bullet(super.getX(), super.getY(), tx, ty, 'enemy');
    }

    canShoot() {
        this.ticks++;
        if (this.ticks >= this.fireRate) {
            this.ticks = 0;
            return true;
        } else {
            return false;
        }
    }
}
