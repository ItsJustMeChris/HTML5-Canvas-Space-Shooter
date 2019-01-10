class EntityList {
    constructor(ctx) {
        this.entities = [];
        this.ctx = ctx;
    }

    dumpEntities() {
        return this.entities;
    }

    registerEntity(entity) {
        this.entities.push(entity);
    }

    removeEntity(entity) {
        let index = this.entities.indexOf(entity);
        if (index > -1) {
            this.entities.splice(index, 1);
        }
    }

    draw() {
        this.ctx.fillRect(0, 0, 500, 500);
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(ctx);
        }
    }

    getType(type) {
        let tmp = [];
        for (let i = 0; i < this.entities.length; i++) {
            if (this.entities[i].type == type) {
                tmp.push(this.entities[i]);
            }
        }
        return tmp;
    }
}
