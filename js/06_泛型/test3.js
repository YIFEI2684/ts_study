/*
泛型类
*/
(function () {
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    var myGenericString = new GenericNumber();
    myGenericString.zeroValue = 'abc';
    myGenericString.add = function (x, y) {
        return x + y;
    };
    console.log(myGenericString.add(myGenericString.zeroValue, 'test'));
    console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12));
})();
