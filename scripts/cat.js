{
    // do load staff

}
var cat = new function () {
	var st = {hp: 0,
			speed: 0,
			posX: 0,
			posY: 0
		}
	
	this.init = function(hp, speed){
		// do something
		if (hp != null){
			this.setHP(hp);
		};
		if (speed != null){
			this.setSpeed(speed);
		};
	};

	this.setHP(hp){
		st.hp = hp;
	};
	
	this.getHP(){
		return st.hp
	}
	
	this.isAlive(){
		return (st.hp > 0);
	}
	
	this.setSpeed(speed){
		st.speed = speed;
	}
}
