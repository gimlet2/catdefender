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
            this.state.dimension = dimension;
        }
        return this;
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
        return ((x - this.state.posX) * (x - this.state.posX) + 
                (y - this.state.posY) * (y - this.state.posY)) <= 
                this.state.dimension.radius * this.state.dimension.radius;
    }
};
