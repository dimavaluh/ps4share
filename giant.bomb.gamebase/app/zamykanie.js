/**
 * Created by User on 29/07/2016.
 */
for (var i = 0; i <= 10; i++) {
    setTimeout((function (_i) {
        return function () {
            console.log(_i);
        }
    }
)(i), i * 1000);
}
