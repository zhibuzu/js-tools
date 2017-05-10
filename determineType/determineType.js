
 /*----------------------------------------------------  
    Description: 确定数据类型
    Version: 0.0.1
    Copyright (c) 2017 Jesse Hu
    
    05 09, 2017
------------------------------------------------------*/

 var JSTOOL = JSTOOL || function (obj) {
         if (this instanceof JSTOOL) {
             this.obj = obj;
             return this;
         }

         return new JSTOOL(obj);
     };

 // 判断字符串
 JSTOOL.isString = function (target) {
     return typeof target === 'string';
 };

 // 判断布尔值
 JSTOOL.isBoolen = function (target) {
     return typeof target === 'boolean';
 };

 // 判断plain对象
 JSTOOL.isPlainObject = function (target) {
     return Object.prototype.toString.call(target) === "[object Object]";
 };

 // 判断数组
 JSTOOL.isArray = function (target) {
     return Object.prototype.toString.call(target) === "[object Array]";
 };

 // 判断函数
 JSTOOL.isFunction = function (target) {
     return Object.prototype.toString.call(target) === "[object Function]";
 };

 // 判断正则表达式
 JSTOOL.isRegExp = function (target) {
     return Object.prototype.toString.call(target) === "[object RegExp]";
 };

 JSTOOL.prototype.map = function (callback) {
     if (!JSTOOL.isArray(this.obj)) {
        throw new TypeError("Uncaught TypeError: " + Object.prototype.toString.call(this.obj) + ".map is not a function");
     }

     if (JSTOOL.isFunction(this.obj.map)) {
         return this.obj.map(callback);
     }

     var i = 0, len = this.obj.length;
     for (; i < len; i++) {
         callback.call(this, this.obj[i], i);
     }

     return this.obj;
 };

 var class2type = {};
 JSTOOL(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"]).map(function (v, i) {
     class2type["[object " + v + "]"] = v.toLowerCase();
 });

 JSTOOL.type = function (target) {
    if (target == null) {
        return target + "";
    }

     return typeof target === 'object' || typeof target === 'function' ?
         class2type[Object.prototype.toString.call(target)] || 'object' : typeof target;
 };
