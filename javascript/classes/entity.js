class Entity {
    constructor(x, y, type = 'base') {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    moveUp() {
        this.y += 10;
    }

    moveDown() {
        this.y -= 20;
    }
}
