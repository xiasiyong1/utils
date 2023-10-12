'use strict';

function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, total) { return total + prev; }, 0);
}

var setCookie = function (name, value, days) {
    if (days === void 0) { days = 0; }
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(date);
};
var getCookie = function (name) {
    var arr = document.cookie.replace(/\s/g, "").split(";");
    for (var i = 0; i < arr.length; i++) {
        var tmpArr = arr[i].split("=");
        if (tmpArr[0] === name) {
            return decodeURIComponent(tmpArr[1]);
        }
    }
    return "";
};
var removeCookie = function (name) {
    // 设置已过期
    setCookie(name, "1", -1);
};

exports.getCookie = getCookie;
exports.removeCookie = removeCookie;
exports.setCookie = setCookie;
exports.sum = sum;
