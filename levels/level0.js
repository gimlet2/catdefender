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
 *      enemies - enum enemy vawes
 *          id: - number vawe
 *              enemy - one of class enemy
 *              count - count enemy in vawe
 *              start - start time between enemy in vawe
 *      curves - curve for enemy
 */
var level = {
    levelId: 0,
    name: _("First invansion"),
    timeInterval: 10,
    nextLVL: 1,
    enemies: {
        0:{enemy: new cat(100, 10),
            count: 1},
        1:{enemy: new cat(100, 20),
            count: 1},
        2:{enemy: new cat(70, 20),
            count: 2,
            start: 3}
        },
    };