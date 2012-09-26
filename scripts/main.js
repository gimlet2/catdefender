{
    // do load staff

}
var main = new function () {

    this.init = function () {
        var level = this.loadLevel(0);
        var state = this.getState(level);
        while (!state.isFinished) {

        }
    };

    this.loadLevel = function (levelId) {
        // todo load level from server with ajax
        return {
            levelId:0,
            levelName:"Start level",
            levelWidth:500,
            levelHeight:300
        }
    };

    this.getState = function (level) {
        return {
            levelId:level.levelId,
            isFinished:true
        }
    };
};

