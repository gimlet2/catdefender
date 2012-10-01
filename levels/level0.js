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
 */
var level = {
    timeInterval = 10,
    enemies = {
        0:{enemy: cat(100, 10),
            count: 1},
        1:{enemy: cat(100, 20),
            count: 1},
        2:{enemy: cat(50, 20),
            count: 2,
            start: 3}
        }
    };