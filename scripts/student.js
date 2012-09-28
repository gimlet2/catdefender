{
    // do load staff

}
var student = new function () {
	var st = {weapon: { ap: 0,
					as: 0
				}
		}
	this.init = function(){
		// do something
	};

	this.setWeapon = function(weapon){
		st['weapon'] = weapon;
	};
	
	this.getWeapon = function(){
		return st['weapon'];
	};
}
