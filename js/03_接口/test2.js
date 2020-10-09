var mySearch = function (source, sub) {
    return source.search(sub) > -1;
};
console.log(mySearch('abcd', 'cb'));
