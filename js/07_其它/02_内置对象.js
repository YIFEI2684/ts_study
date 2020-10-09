/*
内置对象
1. ECMAScript 的内置对象
    Boolean
    Number
    String
    Date
    RegExp
    Error
2. BOM 和 DOM 的内置对象
    Window
    Document
    HTMLElement
    DocumentFragment
    Event
    NodeList
*/
/* 1. ECMAScript 的内置对象 */
var b = new Boolean(1);
var n = new Number(true);
var s = new String('abc');
var d = new Date();
var r = /^1/;
var e = new Error('error message');
b = true;
// let bb: boolean = new Boolean(2)  // error
/* 2. BOM 和 DOM 的内置对象 */
var div = document.getElementById('test');
var divs = document.querySelectorAll('div');
document.addEventListener('click', function (event) {
    console.dir(event.target);
});
var fragment = document.createDocumentFragment();
