/**
 * Created with IntelliJ IDEA.
 * User: gimlet
 * Date: 9/26/12
 * Time: 6:47 PM
 * To change this template use File | Settings | File Templates.
 */
/*
 *  format file
 *  level
 *      timeInterval - time between two vawes
 *      spawnPoint - default point of spawn enemies.
 *      enemies - enum enemy vawes
 *          id: - number vawe
 *              enemy - one of class enemy
 *              count - count enemy in vawe
 *              start - start time between enemy in vawe
 *      curves - curve for enemy
 */
var level = {
    levelId:0,
    name:_("First invansion"),
    timeInterval:10,
    nextLVL:1,
    spawnPoint: { X: 0; Y: 0; },
    enemies:{
        0:{enemy:cat.init(100, 10, {radius: 100}),
            count:1},
        1:{enemy:cat.init(100, 20, {radius: 100}),
            count:1},
        2:{enemy:cat.init(70, 20, {radius: 55}),
            count:2,
            start:3}
    }
};

onLevelLoad();