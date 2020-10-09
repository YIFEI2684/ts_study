/* 测试1: 类型注解 */
(function () {
    function greeter(person) {
        return 'hello ' + person;
    }
    var user = 'tom';
    console.log(greeter(name));
    // const _user = [1, 2, 3]
    // console.log(greeter(_user)) // 类型“number[]”的参数不能赋给类型“string”的参数
})();
/* 测试2: 接口 */
(function () {
    function greeter(person) {
        return "Hello, " + person.firstName + "-" + person.lastName;
    }
    var user = {
        firstName: 'A',
        lastName: 'B'
    };
    console.log(greeter(user));
})();
/*
测试3: 类
*/
(function () {
    var User = /** @class */ (function () {
        function User(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + '-' + lastName;
        }
        return User;
    }());
    function greeter(person) {
        return 'Hello, ' + person.firstName + ' ' + person.lastName;
    }
    var user = new User('Yee', 'Huang');
    console.log(greeter(user));
})();
