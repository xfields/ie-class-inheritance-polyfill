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
      // IE 10 以下不支持 __proto__，故将原型上的所有 configurable 属性拷贝至目标对象
      protoToAssign(object, proto);
      // 保留原型对象，继承时使用
      object.__proto__ = proto;
    }
  }
})();

var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _class, _temp;

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(subClass, superClass);
    } else {
      subClass.__proto__ = superClass;
    }
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Super = (_temp = _class = function Super() {
  _classCallCheck(this, Super);
  this.bar = 'bar';
}, _class.foo = 'foo', _temp);

var Sub = function(_Super) {
  _inherits(Sub, _Super);

  function Sub() {
    _classCallCheck(this, Sub);
    return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).apply(this, arguments));
  }

  _createClass(Sub, [{
    key: 'log',
    value: function log() {
      console.log('Super.foo ', Super.foo);
      console.log('Sub.foo ', Sub.foo);
      console.log('this.foo ', this.foo);
      console.log('this.bar ', this.bar);
    }
  }]);
  return Sub;
}(Super);

var sub = new Sub();

sub.log()