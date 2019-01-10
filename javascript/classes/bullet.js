class Bullet extends Entity {

    constructor(x, y, tx, ty) {
        super(x, y, 'bullet');
        this.model = new Image();
        this.model.src = 'img/bullet.svg';
        this.targetX = tx;
        this.targetY = ty;
    }

    draw(ctx) {
        if (this.targetX != undefined && super.getX() != undefined) {
            //https://math.stackexchange.com/questions/175896/finding-a-point-along-a-line-a-certain-distance-away-from-another-point
            //SECOND ANSWER
            let d = Math.sqrt(((super.getX() - this.targetX) * (super.getX() - this.targetX)) + ((super.getY() - this.targetY) * (super.getY() - this.targetY)));
            let t = 1 / d;
            let testx = ((1 - t) * super.getX() + t * this.targetX);
            let testy = ((1 - t) * super.getY() + t * this.targetY);
            super.setX(testx);
            super.setY(testy);
        } else {
            super.setX(super.getX() + .5);
        }
        ctx.drawImage(this.model, super.getX(), super.getY(), 50, 50);
    }

    checkHit(entity) {
        return !(entity.getX() > (super.getX() + 50) ||
            (entity.getX() + 50) < super.getX() ||
            entity.getY() > (super.getY() + 50) ||
            (entity.getY() + 50) < super.getY());
    }
}
