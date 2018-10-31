(function () {
  var testObject = {};
  if (!(Object.setPrototypeOf || testObject.__proto__)) {
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
      protoToAssign(object, proto);
      object.__proto__ = proto;
    }
  }
})();
