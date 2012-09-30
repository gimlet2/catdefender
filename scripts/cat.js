{
    // do load staff

}
var cat = new function () {
	this.state = {hp: 0,
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
		this.state.hp = hp;
	};
	
	this.getHP(){
		return this.state.hp
	}
	
	this.isAlive(){
		return (this.state.hp > 0);
	}
	
	this.setSpeed(speed){
		this.state.speed = speed;
	}
}
