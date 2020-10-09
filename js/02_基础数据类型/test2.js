/*
联合类型（Union Types）表示取值可以为多种类型中的一种。
*/
(function () {
    var c1 = 3;
    c1 = 'abc';
    // c1 = true
    function toString2(x) {
        return x.toString();
    }
    /*
    function getLength(x: number | string) {
      if (x.length) { // error
        return x.length
      } else {
        return x.toString().length
      }
    } */
})();
