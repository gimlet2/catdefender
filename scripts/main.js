function _(text) {
    return text;
}

function loadScript(section, url) {
    var elem = document.getElementById(section);
    if (elem != null) {
        elem.parentNode.removeChild(elem);
    }

    var script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.id = section;
    document.getElementsByTagName("head")[0].appendChild(script);
}

var main = new function () {
    var self;
    var state;
    this.init = function () {
        self = this;
        this.loadLevel(0, function () {
            state = self.getState();
            setInterval(function () {
                self.draw();
            }, 200);
        });

    };

    this.draw = function () {
        if (typeof state.attack !== "undefined") {
            document.getElementById("game").innerHTML = state.attack.x + " : " + state.attack.y;
        }
    };

    this.loadLevel = function (levelId, levelLoaded) {
        onLevelLoad = levelLoaded;
        loadScript("level", "levels/level" + levelId + ".js");
    };

    this.getState = function () {
        return {
            levelId:level.levelId,
            isFinished:true
        }
    };
    // external event call(mouse click, keyboard etc.)
    this.onStateChange = function (event) {
        state.attack = {x:event.pageX, y:event.pageY};
        if (event.type == 'click') {
            for( var key in level.enemies ) {
                var enemy = level.enemies[key].enemy;
                if (enemy.checkCollision(event.pageX, event.pageY)) {
                    state.attack = {x:event.pageX, y:event.pageY};
                    alert("kill enemy.id=" + key);
                }
            }
        }
    };
};

var onLevelLoad = function () {
    alert(111);
};

{
    // do load staff
    main.init();
}
