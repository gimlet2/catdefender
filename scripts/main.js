{
    // do load staff

}

function _(text){
    return text;
    }

function loadScript(section,url)
{
    var elem = document.getElementById(section);
    if (elem != null) {
        elem.parentNode.removeChild(elem);
        };
    
    var script = document.createElement("script");
    script.src = url;
    script.type="text/javascript";
    script.id = section;
    document.getElementsByTagName("head")[0].appendChild(script); 
};

var main = new function () {

    this.init = function () {
        var level = this.loadLevel(0);
        var state = this.getState(level);
        while (!state.isFinished) {

        }
    };

    this.loadLevel = function (levelId) {
        // todo load level from server with ajax
        loadScript("level","../levels/level" + levelId + ".js");
        return level;
        /*return {
            levelId: level.id,
            levelName: level.name,
            nextLVL: level.nextLVL,
            enemies: level.enemies
        }*/
    };

    this.getState = function (level) {
        return {
            levelId:level.levelId,
            isFinished:true
        }
    };
};

