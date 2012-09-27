{
    // do load staff

}
var student = new function () {
	var st = {hp: 100,
			weapon: { ap: 0,
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
	
	this.applyDamage = function(damage){
		st['hp'] = st['hp'] - damage;
	};
	
	this.getHP = function(){
		return st['hp'];
	}
	
	this.imAlive = function(){
		return st['hp'] <= 0;
	};
}
