{
    // do load staff

}
var student = new function () {
    this.state = {
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
}
