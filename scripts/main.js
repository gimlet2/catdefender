{
    // do load staff

}

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

    this.init = function () {
        var level = this.loadLevel(0);
        var state = this.getState(level);
        while (!state.isFinished) {

        }
    };

    this.loadLevel = function (levelId) {
        loadScript("level", "../levels/level" + levelId + ".js");
    };

    this.getState = function (level) {
        return {
            levelId:level.levelId,
            isFinished:true
        }
    };
};

var onLevelLoad = function () {
    alert(111);
};