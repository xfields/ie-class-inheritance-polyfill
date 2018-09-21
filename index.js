/* eslint-disable */
(function () {
  var testObject = {};
  if (!(Object.setPrototypeOf || testObject.__proto__)) {
    // 参考：babel-plugin-transform-proto-to-assign
    function protoToAssign(target, proto) {
      var keys = Object.getOwnPropertyNames(proto);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(proto, key);
        if (value && value.configurable && target[key] === undefined) {
          Object.defineProperty(target, key, value);
        }
      }
    }

    Object.setPrototypeOf = function (object, proto) {
      // IE 10 以下不支持 __proto__，导致静态属性无法被继承
      // 这里将（父类）原型上的所有属性直接拷贝至子类
      protoToAssign(object, proto);

      // 拷贝原型对象，防止继承时父类的实例属性丢失
      object.__proto__ = proto;
    }
  }
})();
