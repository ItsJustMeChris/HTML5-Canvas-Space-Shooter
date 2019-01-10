class Player extends Entity {

    constructor(x, y) {
        super(x, y, 'player');
        this.model = new Image();
        this.model.src = 'img/rocket.svg';
        console.log("PLAYER");
    }

    draw(ctx) {
        ctx.drawImage(this.model, super.getX(), super.getY(), 50, 50);
    }
}
