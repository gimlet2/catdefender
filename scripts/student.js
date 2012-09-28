{
    // do load staff

}
var student = new function () {
    this.state = {hp:100,
        weapon:{ ap:0,
            as:0
        }
    };
    this.init = function () {
        // do something
    };

    this.setWeapon = function (weapon) {
        this.state.weapon = weapon;
    };

    this.getWeapon = function () {
        return this.state.weapon;
    };

    this.applyDamage = function (damage) {
        this.state.hp = this.state.hp - damage;
    };

    this.getHP = function () {
        return this.state.hp;
    };

    this.isAlive = function () {
        return this.state.hp > 0;
    };
}
