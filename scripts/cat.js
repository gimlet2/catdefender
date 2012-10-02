{
    // do load staff
}

var cat = new function () {
    this.state = {hp:0,
        speed:0,
        posX:0,
        posY:0
    };

    this.init = function (hp, speed) {
        if (typeof hp != 'undefined') {
            this.setHP(hp);
        }
        if (typeof speed != 'undefined') {
            this.setSpeed(speed);
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
};
