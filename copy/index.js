
 /*----------------------------------------------------  
    Description: 对js对象或数组的拷贝实现
    Version: 0.0.1
    Copyright (c) 2017 Jesse Hu
    
    05 09, 2017
------------------------------------------------------*/
 var JSTOOL = JSTOOL || function () {};

 JSTOOL.copy = function (source) {
   if (typeof source === 'object' || typeof source === 'function') {

   } else {
     return source;
   }
 };
