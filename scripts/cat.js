{
    // do load staff
}

var cat = new function () {
    this.state = {hp:0,
        speed:0,
        posX:0,
        posY:0,
        dimension:{radius: 0}
    };

    this.init = function (hp, speed, dimension) {
        if (typeof hp != 'undefined') {
            this.setHP(hp);
        }
        if (typeof speed != 'undefined') {
            this.setSpeed(speed);
        }
        if (typeof dimension != 'undefined') {
            this.dimension = dimension;
        }
    };

    this.setHP = function (hp) {
        this.state.hp = hp;
    };

    this.getHP = function () {
        return this.state.hp;
    };

    this.isAlive = function () {
        return (this.state.hp > 0);
    };

    this.setSpeed = function (speed) {
        this.state.speed = speed;
    };
    
    this.checkCollision = function(x, y){
        return (Math.sqrt((this.posX + x) * (this.posX + x) + (this.posY + y) * (this.posY + Y)) < this.dimension.radius*this.dimension.radius);
    }
};
