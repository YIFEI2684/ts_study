/*
基础数据类型
1. boolean
2. number
3. string
4. null和undefined
5. 数组
6. 元组(Tuple)
7. 枚举(enum)
8. any
9. void
10. object
*/
(function () {
    // 1. boolean
    var isDone = false;
    isDone = true;
    // isDone = 2 // error
    // 2. number
    var a1 = 10; // 十进制
    var a2 = 10; // 二进制
    var a3 = 10; // 八进制
    var a4 = 0xa; // 十六进制
    // 3. string
    var name = 'tom';
    name = 'jack';
    // name = 12 // error
    var age = 12;
    var info = "My name is " + name + ", I am " + age + " years old!";
    // 4. undefined和null
    var u = undefined;
    var n = null;
    /* undefined和null类型的变量意义不大 */
    /* undefined和null是任意类型的子类型 */
    /* 在ts非严格模式下才可以, 在严格模式下会报错 */
    var a5 = null;
    // 5. 数组
    var list1 = [1, 2, 3];
    var list2 = [1, 2, 3];
    // 6. 元组(Tuple)
    /* 一个已知数量和类型的数组, 元素不必类型相同 */
    var t1;
    t1 = ['hello', 10];
    // t1 = [10, 'hello'] // error
    console.log(t1[0].substring(1));
    // console.log(t1[1].substring(1)) // error number类型没有此方法
    // 7. 枚举
    /* 为一组数值赋予友好的名字 */
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    // 枚举数值默认从0开始依次递增
    // 根据特定的名称得到对应的枚举数值
    var myColor = Color.Green; // 0
    console.log(myColor, Color.Red, Color.Blue);
    // 指定枚举数值
    var Color2;
    (function (Color2) {
        Color2[Color2["Red"] = 1] = "Red";
        Color2[Color2["Green"] = 3] = "Green";
        Color2[Color2["Blue"] = 5] = "Blue";
    })(Color2 || (Color2 = {}));
    // 根据枚举数值得到对应的名称
    console.log(Color2.Green, Color2[3]); // 3 'Green'
    // 8. any 
    /* 任意类型, 数据类型不固定时使用 */
    var notSure = 3;
    notSure = 'mybe a string';
    notSure = true;
    // 不同类型类型的数组
    var list3 = [1, true, 'abc'];
    // 9. void
    /* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
    function fn() {
        console.log('fn()');
        // return undefined
        // return null
        // return 1 // error
    }
    // 10. object
    function fn2(obj) {
        console.log('fn2()', obj);
        return {};
        // return undefined
        // return null
    }
    console.log(fn2(new String('abc')));
    // console.log(fn2('abc') // error
    console.log(fn2(String));
})();
